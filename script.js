const ctxDistrict = document.getElementById('districtChart').getContext('2d');
new Chart(ctxDistrict, {
    type: 'bar',
    data: {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [{
            label: 'Registered Restaurants',
            data: [43, 54, 76, 42, 31],
            backgroundColor: '#6437b7',
            borderRadius: 5
        }]
    },
    options: { 
        responsive: true,
        maintainAspectRatio: false
    }
});

const ctxSearch = document.getElementById('searchChart').getContext('2d');
new Chart(ctxSearch, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Total Searches',
            data: [342, 234, 411, 543, 797, 876, 768],
            borderColor: '#1798ab',
            backgroundColor: 'rgba(23, 162, 184, 0.2)',
            fill: true,
        }]
    },
    options: { 
        responsive: true,
        maintainAspectRatio: false
    }
});

const ctxAnon = document.getElementById('anonChart').getContext('2d');
new Chart(ctxAnon, {
    type: 'doughnut',
    data: {
        labels: ['Anonymous', 'Named'],
        datasets: [{
            data: [67, 33],
            backgroundColor: [
                '#6c757d',
                '#28a745'
            ],
            borderWidth: 0
        }]
    },
    options: { 
        responsive: true,
        maintainAspectRatio: false
    }
});
