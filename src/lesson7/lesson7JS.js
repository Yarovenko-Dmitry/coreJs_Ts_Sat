console.log('lesson7JS works')















//
// class CreateChart {
//     constructor(chart) {
//         this.$el = document.createElement('div');
//         this.$el.innerText = chart.slice(0, 1);
//         this.setDefaultStyle();
//         this._rotateId = null;
//         this._rotateStartValue = 0;
//         this._rotateValue = 6;
//     }
//
//     get value() {
//         return this.$el;
//     }
//     setDefaultStyle(){
//         this.$el.style.color = 'black';
//         this.$el.style.fontSize = `20px`;
//         this.$el.style.textAlign = 'center';
//         this.$el.style.boxSizing = 'content-box';
//         this.$el.style.width = '30px';
//         this.$el.style.height = '30px';
//         this.$el.style.borderRadius = '50%';
//     }
//
//     rotate(){
//         this.$el.style.transform = `rotate(${this._rotateStartValue}deg)`;
//         this._rotateStartValue += this._rotateValue;
//         this._rotateId = requestAnimationFrame(this.rotate.bind(this));
//     }
//     startRotate(deg){
//         this._rotateValue = deg;
//         this._rotateId = requestAnimationFrame(this.rotate.bind(this));
//     }
//     stopRotate(){
//         cancelAnimationFrame(this._rotateId);
//     }
//     setColor(value){
//         this.$el.style.color = value;
//     }
// }
//
// class CreateString extends CreateChart {
//     constructor(value, charts, fontSize) {
//         super(value)
//         this.addCharts(charts);
//         this.charts = charts;
//     }
//     addCharts(charts) {
//         charts.forEach(chart => this.$el.appendChild(chart.value));
//     }
//     setDefaultStyle() {
//         this.$el.style.display = 'flex';
//         this.$el.style.height = 'auto';
//     }
//     startRotate() {
//         this.charts.forEach(chart => chart.startRotate());
//     }
// }
//
//
// const a = new CreateChart('a', 'red', 40);
// a.setColor('red')
// a.startRotate(6);
//
// const b = new CreateChart('b', 'green', 40);
// b.setColor('blue')
// b.startRotate(-1);
// const c = new CreateChart('c', 'blue', 40);
// c.setColor('green')
// c.startRotate(4);
//
// const vlad = new CreateString('', [a, b, c]);
//
//
// document.body.appendChild(vlad.value)
//
//
