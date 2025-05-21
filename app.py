from flask import Flask, render_template
import os
from dotenv import load_dotenv
import csv

app = Flask(__name__)
app.secret_key = os.getenv('FLASK_SECRET_KEY', 'supersecretdevkey')

# === ROUTES ===
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/info', methods=['GET', 'POST'])
def info():
    if request.method == 'POST':
        first_name = request.form.get('first_name')
        last_name = request.form.get('last_name')
        email = request.form.get('email')
        source = request.form.get('source', 'unspecified')

        filename = "unspecified_signups.csv"
        if source == "beta":
            filename = "beta_testers.csv"
        elif source == "waitlist":
            filename = "waitlist.csv"

        with open(filename, mode='a', newline='') as file:
            writer = csv.writer(file)
            writer.writerow([first_name, last_name, email])

        return redirect('/success')  # ✅ go to success page now

    source = request.args.get('source', 'unspecified')
    return render_template('info.html', source=source)

@app.route('/launch')
def launch():
    max_beta = 20
    max_waitlist = 100
    beta_signups = 0

    try:
        with open('beta_testers.csv', mode='r') as file:
            reader = csv.reader(file)
            beta_signups = sum(1 for _ in reader)
    except FileNotFoundError:
        beta_signups = 0

    beta_spots_left = max(0, max_beta - beta_signups)
    waitlist_spots_left = max(0, max_waitlist - beta_signups)  # same source for now

    return render_template("launch.html", beta_spots_left=beta_spots_left, waitlist_spots_left=waitlist_spots_left)

@app.route('/success')
def success():
    return render_template("success.html")

@app.route('/cancel')
def cancel():
    return render_template('cancel.html')

@app.route('/install')
def install():
    return render_template('install.html')

if __name__ == '__main__':
    app.run(debug=True)
