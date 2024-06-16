export class Validator {
  constructor(value) {
    this.value = value.trim();

    this.__errorMessage = "";
  }

  isRequire(message = "Bắt buộc nhập vào.") {
    if (this.__errorMessage) return this;

    if (this.value.length === 0) {
      this.__errorMessage = message;
    }

    return this;
  }

  isEmail(message = "Không đúng định dạng của email.") {
    if (this.__errorMessage) return this;

    const REGEX_EMAIL = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g;

    if (!REGEX_EMAIL.test(this.value)) {
      this.__errorMessage = message;
    }

    return this;
  }

  isPassword() {
    if (this.__errorMessage) return this;

    const REGEX_PW = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}:<>?]).*$/g;

    if (!REGEX_PW.test(this.value)) {
      this.__errorMessage = "Mật khẩu của bạn chưa đủ mạnh.";
    }

    return this;
  }

  isNumber() {
    if (this.__errorMessage) return this;

    if (Number.isNaN(+this.value)) {
      this.__errorMessage = "Bắt buộc nhập vào ký tự số.";
    }

    this.value = Number(this.value);

    return this;
  }

  isOnlyString() {
    if (this.__errorMessage) return this;

    const REGEX_STRING = /^[a-zA-Z]+$/g;
    if (!REGEX_STRING.test(this.value)) {
      this.__errorMessage = "Chỉ được nhập vào ký tự chữ";
    }

    return this;
  }

  isStringWithSpace() {
    if (this.__errorMessage) return this;

    const REGEX_STRING_ALLOW_SPACE = /^[a-zA-Z ]+$/g;

    if (!REGEX_STRING_ALLOW_SPACE.test(this.value)) {
      this.__errorMessage = "Chỉ được nhập vào ký tự chữ";
    }

    return this;
  }

  min(value) {
    if (this.__errorMessage) return this;

    if (typeof this.value === "string") {
      if (this.value.length < value) {
        this.__errorMessage = `Không được nhập ít hơn ${value} ký tự.`;
      }
    }

    if (typeof this.value === "number") {
      if (this.value < value) {
        this.__errorMessage = `Không được nhập nhỏ hơn số ${value}`;
      }
    }

    return this;
  }

  max(value) {
    if (this.__errorMessage) return this;

    if (typeof this.value === "string") {
      if (this.value.length > value) {
        this.__errorMessage = `Không được nhập nhiều hơn ${value} ký tự.`;
      }
    }

    if (typeof this.value === "number") {
      if (this.value > value) {
        this.__errorMessage = `Không được nhập lớn hơn số ${value}`;
      }
    }

    return this;
  }

  get message() {
    return this.__errorMessage;
  }
}

