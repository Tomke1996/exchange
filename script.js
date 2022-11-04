// NAVIGATION:
const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === 'false') {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
});

// Exchange Rate API :
const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    fetch(`https://v6.exchangerate-api.com/v6/cd2fc6c8c5b1d4ce1f6ba8f1/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
        const rate = data.conversion_rates[currency_two];
        rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

        amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
}

currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('change', calculate);
swap.addEventListener('click', () => {
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
});

calculate();

// Flag Changer :
currencyEl_one.addEventListener('change', flagChangeOne);
currencyEl_two.addEventListener('change', flagChangeTwo);

function flagChangeOne() {
    const value = currencyEl_one.options[currencyEl_one.selectedIndex].text.toLowerCase().slice(0, 2);
    currencyEl_one.style.backgroundImage = `url('https://flagicons.lipis.dev/flags/4x3/${value}.svg')`;
}

function flagChangeTwo() {
    const valueTwo = currencyEl_two.options[currencyEl_two.selectedIndex].text.toLowerCase().slice(0, 2);
    currencyEl_two.style.backgroundImage = `url('https://flagicons.lipis.dev/flags/4x3/${valueTwo}.svg')`;
}

// Charts JS :

// EURO CHART :

const ctx = document.getElementById('myChart').getContext("2d");
let delayed;

let gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "rgba(58, 123, 213, 1)");
gradient.addColorStop(1, "rgba(0, 210, 255, 0.3)");

const labels = [
    "Jun 5",
    "Jun 6",
    "Jun 7",
    "Jun 8",
    "Jun 9",
    "Jun 10",
    "Jun 11",
    "Jun 12",
    "Jun 13",
    "Jun 14",
    "Jun 15",
    "Jun 16",
    "Jun 17",
    "Jun 18",
    "Jun 19",
    "Jun 20",
    "Jun 21",
    "Jun 22",
    "Jun 23",
    "Jun 24",
    "Jun 25",
    "Jun 26",
    "Jun 27",
    "Jun 28",
    "Jun 29",
    "Jun 30",
    "Jul 1",
    "Jul 2",
    "Jul 3",
    "Jul 4",
];

const data = {
    labels,
    datasets: [{
        data: [117.27, 117.25, 117.22, 117.24, 117.25, 117.25, 117.25, 117.24, 117.22, 117.07, 117.23, 117.23, 117.25, 117.22, 117.07, 117.07, 117.23, 117.28, 117.26, 117.27, 117.31, 117.33, 117.33, 117.30, 117.31, 117.30, 117.23, 117.21, 117.13, 117.14],
        label: "EUR/RSD 30 days period",
        fill: true,
        backgroundColor: gradient,
        borderColor: '#fff',
        },
    ],
};

const config = {
    type: "line",
    data: data,
    option: {
        responsive: true,
        hoverRadius: 5,
        animation: {
            onComplete: () => {
                delayed = true;
            },
            delayed: (context) => {
                let delayed = 0;
                if (context.type === "data" && context.mode === "default" && !delayed) {
                    delayed = context.dataIndex * 300 + context.datasetIndex * 100;
                }
                return delay;
            },
        },
    },
};

const myChart = new Chart(ctx, config);

// DOLLAR CHART :

const ctx_1 = document.getElementById('myChart_1').getContext("2d");
let delayed1;

let gradient_1 = ctx_1.createLinearGradient(0, 0, 0, 400);
gradient_1.addColorStop(0, "rgba(90, 160, 106, 1)");
gradient_1.addColorStop(1, "rgba(22, 98, 40, 0.3)");

const labels_1 = [
    "Jun 5",
    "Jun 6",
    "Jun 7",
    "Jun 8",
    "Jun 9",
    "Jun 10",
    "Jun 11",
    "Jun 12",
    "Jun 13",
    "Jun 14",
    "Jun 15",
    "Jun 16",
    "Jun 17",
    "Jun 18",
    "Jun 19",
    "Jun 20",
    "Jun 21",
    "Jun 22",
    "Jun 23",
    "Jun 24",
    "Jun 25",
    "Jun 26",
    "Jun 27",
    "Jun 28",
    "Jun 29",
    "Jun 30",
    "Jul 1",
    "Jul 2",
    "Jul 3",
    "Jul 4",
];

const data_1 = {
    labels,
    datasets: [{
        data: [109.39, 109.41, 109.70, 109.48, 109.76, 110.92, 111.50, 111.49, 111.99, 112.42, 112.27, 111.93, 111.61, 111.59, 111.59, 111.47, 111.28, 111.28, 111.35, 111.30, 111.17, 111.16, 110.92, 111.15, 111.83, 112.19, 112.31, 112.36, 112.35, 112.38],
        label: "USD/RSD 30 days period",
        fill: true,
        backgroundColor: gradient_1,
        borderColor: '#fff',
        },
    ],
};

const config_1 = {
    type: "line",
    data: data_1,
    option: {
        responsive: true,
        hoverRadius: 5,
        animation: {
            onComplete: () => {
                delayed = true;
            },
            delayed: (context) => {
                let delayed1 = 0;
                if (context.type === "data" && context.mode === "default" && !delayed) {
                    delayed = context.dataIndex * 300 + context.datasetIndex * 100;
                }
                return delay;
            },
        },
    },
};

const myChart_1 = new Chart(ctx_1, config_1);

// GBR CHART :

const ctx_2 = document.getElementById('myChart_2').getContext("2d");
let delayed2;

let gradient_2 = ctx_2.createLinearGradient(0, 0, 0, 400);
gradient_2.addColorStop(0, "rgba(177, 47, 34, 1)");
gradient_2.addColorStop(1, "rgba(125, 21, 11, 0.3)");

const labels_2 = [
    "Jun 5",
    "Jun 6",
    "Jun 7",
    "Jun 8",
    "Jun 9",
    "Jun 10",
    "Jun 11",
    "Jun 12",
    "Jun 13",
    "Jun 14",
    "Jun 15",
    "Jun 16",
    "Jun 17",
    "Jun 18",
    "Jun 19",
    "Jun 20",
    "Jun 21",
    "Jun 22",
    "Jun 23",
    "Jun 24",
    "Jun 25",
    "Jun 26",
    "Jun 27",
    "Jun 28",
    "Jun 29",
    "Jun 30",
    "Jul 1",
    "Jul 2",
    "Jul 3",
    "Jul 4",
];

const data_2 = {
    labels,
    datasets: [{
        data: [136.59, 137.07, 137.49, 137.41, 137.41, 137.61, 137.26, 137.23, 136.66, 135.81, 135.62, 136.88, 136.83, 136.23, 136.25, 136.44, 136.59, 136.33, 136.31, 136.62, 136.45, 136.44, 136.20, 135.96, 135.97, 136.27, 135.74, 135.81, 135.83, 136.11],
        label: "GBR/RSD 30 days period",
        fill: true,
        backgroundColor: gradient_2,
        borderColor: '#fff',
        },
    ],
};

const config_2 = {
    type: "line",
    data: data_2,
    option: {
        responsive: true,
        hoverRadius: 5,
        animation: {
            onComplete: () => {
                delayed = true;
            },
            delayed: (context) => {
                let delayed2 = 0;
                if (context.type === "data" && context.mode === "default" && !delayed) {
                    delayed = context.dataIndex * 300 + context.datasetIndex * 100;
                }
                return delay;
            },
        },
    },
};

const myChart_2 = new Chart(ctx_2, config_2);