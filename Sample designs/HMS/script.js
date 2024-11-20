// script.js

let currentRole = 'admin'; // Default role is admin

// Function to handle role selection
function updateRole() {
    currentRole = document.getElementById('role').value;
}

// Function to simulate temperature reading
function simulateTemperature() {
    let temperature = (Math.random() * (40 - 20) + 20).toFixed(2); // Random temperature between 20 and 40°C
    document.getElementById('temperature-status').innerText = `Current Temperature: ${temperature} °C`;

    let alertMessage = temperature > 30 ? "Alert: Temperature exceeds threshold!" : "Temperature is normal.";
    document.getElementById('alert-status').innerText = alertMessage;
}

// Function to show patient information based on user role
function showPatientInfo() {
    const patientInfo = [
        { id: 1, name: "John Doe", age: 45, condition: "Fever" },
        { id: 2, name: "Jane Smith", age: 34, condition: "Flu" }
    ];

    let patientData = '';

    // Check role for access
    if (currentRole === 'admin') {
        patientData = generatePatientData(patientInfo);
    } else if (currentRole === 'doctor') {
        patientData = generatePatientData(patientInfo);
    } else if (currentRole === 'nurse') {
        patientData = generatePatientData([patientInfo[0]]); // Nurses can only view the first patient
    } else {
        patientData = 'Access Denied!';
    }

    document.getElementById('patient-data').innerHTML = patientData;
}

// Helper function to generate patient data
function generatePatientData(patients) {
    let data = '<ul>';
    patients.forEach(patient => {
        data += `<li>Patient ID: ${patient.id}, Name: ${patient.name}, Age: ${patient.age}, Condition: ${patient.condition}</li>`;
    });
    data += '</ul>';
    return data;
}

// Function to handle login logic (just a placeholder)
function login() {
    alert(`${currentRole.charAt(0).toUpperCase() + currentRole.slice(1)} logged in!`);
}
