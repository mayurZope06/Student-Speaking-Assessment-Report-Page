# Student Speaking Assessment Report Page

This project is a React-based frontend application that displays a student's speaking assessment report, including overall scores, skill breakdowns, and visual charts.

## 🚀 How to Run the Project

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/mayurZope06/Student-Speaking-Assessment-Report-Page.git
    cd student-report
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Start the Server:**
    ```bash
    npm start
    ```
    The app will open at `http://localhost:3000`.

## 📂 Where Scores are Stored

The data is stored in a local JSON file to simulate an API response, as per **Option 1** of the assignment requirements.

* **Location:** `src/data.json`
* **Structure:**
    ```json
    {
      "overall_score": 7.0,
      "breakdown": {
        "pronunciation": 8.0,
        ...
      }
    }
    ```

## 🧠 Feedback Logic

The application uses conditional logic to generate descriptive feedback based on the numeric score (0-9). This logic is implemented in the `getFeedback` function in `App.js`.

**Rules:**
* **Score ≥ 8:** Returns "Excellent performance with strong control."
* **Score 6 - 7:** Returns "Good performance with minor inaccuracies."
* **Score < 6:** Returns "Needs improvement."

## 🛠 Tech Stack

* **Frontend:** React.js
* **Charting:** Chart.js / React-Chartjs-2
* **Styling:** CSS (Flexbox for responsive layout)
