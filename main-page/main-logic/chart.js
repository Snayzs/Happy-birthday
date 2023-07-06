var label = ["HTML", "CSS", "JS"];
var datahtml = [442, 92, 69, 39, 38, 108, 26];
var datacss = [209, 135, 120, 333, 212, 249, 239, 276, 596, 292, 79, 304, 217, 80, 143, 281, 151];
var datajs = [755, 212, 15, 339, 80, 231, 151, 84, 616, 71, 158, 71, 88, 82, 37, 67, 46, 1320, 431, 113, 46];

var label = ["Total"];
var data = [
  datahtml.reduce((a, b) => a + b, 0),
  datacss.reduce((a, b) => a + b, 0),
  datajs.reduce((a, b) => a + b, 0)
];

new Chart('myChart', {
  type: 'horizontalBar',
  data: {
    labels: label,
    datasets: [
      {
        label: 'HTML',
        data: [data[0]],
        backgroundColor: '#E34C26D4',
      },
      {
        label: 'CSS',
        data: [data[1]],
        backgroundColor: '#2965f1D4',
      },
      {
        label: 'JS',
        data: [data[2]],
        backgroundColor: '#F7DF1ED4',
      }
    ]
  },
  options: {
    indexAxis: 'x',
    scales: {
      x: {
        stacked: true
      },
      y: {
        stacked: true
      }
    }
  }
});
