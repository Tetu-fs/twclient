window.addEventListener("DOMContentLoaded", () => {
  window.twclient = new Test();
});

class Test {
  constructor() {
    this.readKeys().then(result => {this.keys = JSON.parse(result); });
    document.body.insertAdjacentHTML("beforebegin", "<h1>Test</h1>");
  }

  readKeys() {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', "./debug/mydata.json", true);
      xhr.send(null);
      xhr.onreadystatechange = () => {
        if (xhr.status !== 200) {
          reject(new Error(req.statusText));
        }
        resolve(xhr.responseText);
      }
    });
  }

}