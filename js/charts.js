let firstChartCtx = document.getElementById("languagesChart").getContext("2d");
let languagesChart = new Chart(firstChartCtx, {
  type: "bar",
  responsive: true,
  maintainAspectRatio: true,
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Javascript",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
      {
        label: "PHP",
        backgroundColor: "rgb(255, 99, 1)",
        borderColor: "rgb(255, 99, 1)",
        data: [0, 0, 50, 2, 20, 10, 15],
      },
    ],
  },
});

let secondChartCtx = document.getElementById("countriesChart").getContext("2d");
let countriesChart = new Chart(secondChartCtx, {
  type: "line",
  responsive: true,
  maintainAspectRatio: true,
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Egypt",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
      {
        label: "USA",
        backgroundColor: "rgb(255, 99, 1)",
        borderColor: "rgb(255, 99, 1)",
        data: [0, 0, 50, 2, 20, 10, 15],
      },
    ],
  },
});

let thirdChartCtx = document.getElementById("goodsChart").getContext("2d");
let goodsChart = new Chart(thirdChartCtx, {
  type: "pie",
  responsive: true,
  maintainAspectRatio: true,
  data: {
    labels: ["May", "June", "July"],
    datasets: [
      {
        label: "Egypt",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [20, 30, 45],
      },
      {
        label: "USA",
        backgroundColor: "rgb(255, 99, 1)",
        borderColor: "rgb(255, 99, 1)",
        data: [20, 10, 15],
      },
    ],
  },
});

let forthChartCtx = document.getElementById("usersChart").getContext("2d");
let usersChart = new Chart(forthChartCtx, {
  type: "bar",
  responsive: true,
  maintainAspectRatio: true,
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Egypt",
        backgroundColor: "rgba(0, 255, 0, 0.8)",
        borderColor: "rgb(255, 255, 255)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
      {
        label: "USA",
        backgroundColor: "rgb(255, 99, 45)",
        borderColor: "rgb(255, 99, 45)",
        data: [0, 0, 50, 2, 20, 10, 15],
      },
    ],
  },
});
