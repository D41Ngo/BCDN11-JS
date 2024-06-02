const fibonacci = (n) => {
  var i;
  var fib = [0, 1]; // Initialize array!
  for (i = 2; i <= n; i++) {
    // Next fibonacci number = previous + one before previous
    // Translated to JavaScript:
    fib[i] = fib[i - 2] + fib[i - 1];
    console.log(fib[i]);
  }
};

// --------------------------
// Đối tượng: Promise.
// API

const promise = new Promise((resolve, reject) => {
  // Cần 0.3s thì chúng ta mới nhận được kết quả.
  setTimeout(() => {
    reject("That Bai");

    reject("That Bai");
    
    reject("That Bai");
    
    reject("That Bai");

    resolve("Thanh Cong");
  }, 300);
});

// .then để đợi kết quả trả về thành công.
promise
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

// -------------------------

