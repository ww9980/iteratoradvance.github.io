// Generated by CoffeeScript 1.4.0
(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.NAN.maximumNumber = 100000000;

  NAN.NumberSet = (function() {

    function NumberSet() {
      this.listFilter = __bind(this.listFilter, this);

      this.getDescription = __bind(this.getDescription, this);

      this.lengthFilter = __bind(this.lengthFilter, this);
      this.description = "Interesting Number";
      this.numbers = [];
      this.filters = [];
      this.addFilter(this.lengthFilter);
    }

    NumberSet.prototype.lengthFilter = function(n) {
      console.log(34333333333);
      console.log(this.minLength);
      if (this.minLength) {
        if (n.length < this.minLength) {
          return {
            score: 0,
            description: "略短的"
          };
        }
      }
      return true;
    };

    NumberSet.prototype.getDescription = function() {
      return this.description;
    };

    NumberSet.prototype.listFilter = function(n) {
      var _ref;
      if (_ref = parseInt(n), __indexOf.call(this.numbers, _ref) >= 0) {
        return true;
      }
      return null;
    };

    NumberSet.prototype.primeFilter = function(n) {
      var a;
      n = parseInt(n);
      if (n === 2) {
        return true;
      }
      if (n < 2) {
        return null;
      }
      a = 2;
      while (a * a <= n) {
        if (n % a === 0) {
          return null;
        }
        a += 1;
      }
      return true;
    };

    NumberSet.prototype.addFilter = function(func) {
      return this.filters.push(func);
    };

    NumberSet.prototype.evaluate = function() {
      return console.log("!!!!");
    };

    NumberSet.prototype.sqrtEvalutor = function(n) {
      return 100 + Math.sqrt(parseInt(n), 1);
    };

    NumberSet.prototype.lengthEvalutor = function(n) {
      return 10 * Math.pow(n.length, 1);
    };

    NumberSet.prototype.lengthEvalutor2 = function(n) {
      return 10 * Math.pow(n.length, 2);
    };

    NumberSet.prototype.lengthEvalutor3 = function(n) {
      return 10 * Math.pow(n.length, 3);
    };

    NumberSet.prototype.logEvalutor = function(n) {
      return 30 + 5 * Math.pow(Math.log(parseInt(n)), 1.8);
    };

    NumberSet.prototype.analyze = function(n) {
      var filter, info, result, _i, _len, _ref;
      result = {
        score: 1,
        description: ""
      };
      _ref = this.filters;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        filter = _ref[_i];
        info = filter(n);
        console.log(info);
        if (info === null) {
          return null;
        }
        if (info === true) {
          continue;
        }
        result.score *= info.score;
        result.description += info.description;
      }
      console.log(result);
      result.score *= this.evaluate(n);
      result.description += this.getDescription();
      console.log(result);
      return result;
    };

    return NumberSet;

  })();

  NAN.PrimeNumberSet = (function(_super) {

    __extends(PrimeNumberSet, _super);

    function PrimeNumberSet() {
      PrimeNumberSet.__super__.constructor.call(this);
      this.description = "质数";
      this.addFilter(this.primeFilter);
      this.evaluate = this.logEvalutor;
    }

    return PrimeNumberSet;

  })(NAN.NumberSet);

  NAN.PureOddNumberSet = (function(_super) {

    __extends(PureOddNumberSet, _super);

    function PureOddNumberSet() {
      PureOddNumberSet.__super__.constructor.call(this);
      this.description = "纯奇数";
      this.minLength = 4;
      this.addFilter(this.filter);
      this.evaluate = this.lengthEvalutor;
    }

    PureOddNumberSet.prototype.filter = function(n) {
      var char, _i, _len;
      for (_i = 0, _len = n.length; _i < _len; _i++) {
        char = n[_i];
        if (parseInt(char) % 2 === 0) {
          return null;
        }
      }
      return {
        score: 1,
        description: ""
      };
    };

    return PureOddNumberSet;

  })(NAN.NumberSet);

  NAN.PureEvenNumberSet = (function(_super) {

    __extends(PureEvenNumberSet, _super);

    function PureEvenNumberSet() {
      PureEvenNumberSet.__super__.constructor.call(this);
      this.description = "纯偶数";
      this.minLength = 4;
      this.addFilter(this.filter);
      this.evaluate = this.lengthEvalutor;
    }

    PureEvenNumberSet.prototype.filter = function(n) {
      var char, _i, _len;
      for (_i = 0, _len = n.length; _i < _len; _i++) {
        char = n[_i];
        if (parseInt(char) % 2 === 1) {
          return null;
        }
      }
      return {
        score: 1,
        description: ""
      };
    };

    return PureEvenNumberSet;

  })(NAN.NumberSet);

  NAN.PureNumberSet = (function(_super) {

    __extends(PureNumberSet, _super);

    function PureNumberSet() {
      PureNumberSet.__super__.constructor.call(this);
      this.description = "纯数";
      this.minLength = 3;
      this.addFilter(this.filter);
      this.evaluate = this.lengthEvalutor2;
    }

    PureNumberSet.prototype.filter = function(n) {
      var char, _i, _len;
      for (_i = 0, _len = n.length; _i < _len; _i++) {
        char = n[_i];
        if (char !== n[0]) {
          return null;
        }
      }
      return {
        score: 1,
        description: ""
      };
    };

    return PureNumberSet;

  })(NAN.NumberSet);

  NAN.APNumberSet = (function(_super) {

    __extends(APNumberSet, _super);

    function APNumberSet() {
      this.filter = __bind(this.filter, this);
      APNumberSet.__super__.constructor.call(this);
      this.description = "等差数列数";
      this.minLength = 3;
      this.addFilter(this.filter);
      this.evaluate = this.lengthEvalutor2;
    }

    APNumberSet.prototype.filter = function(n) {
      var delta, i, newDelta, _i, _ref;
      if (n.length < 3) {
        return null;
      }
      delta = -11;
      for (i = _i = 0, _ref = n.length - 1; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        newDelta = n[i + 1] - n[i];
        if (newDelta === 0) {
          return null;
        }
        if (delta === -11) {
          delta = newDelta;
        } else {
          if (delta !== newDelta) {
            return null;
          }
        }
      }
      return true;
    };

    return APNumberSet;

  })(NAN.NumberSet);

  NAN.LoopNumberSet = (function(_super) {

    __extends(LoopNumberSet, _super);

    function LoopNumberSet() {
      this.filter = __bind(this.filter, this);
      LoopNumberSet.__super__.constructor.call(this);
      this.description = "周期数";
      this.minLength = 3;
      this.addFilter(this.filter);
      this.evaluate = this.lengthEvalutor2;
    }

    LoopNumberSet.prototype.filter = function(n) {
      var flag, i, j, k, p, _i, _j, _k, _ref;
      if (n.length < 3) {
        return null;
      }
      for (i = _i = 2, _ref = n.length - 1; 2 <= _ref ? _i < _ref : _i > _ref; i = 2 <= _ref ? ++_i : --_i) {
        if (n.length % i !== 0) {
          continue;
        }
        k = n.length / i;
        flag = true;
        for (p = _j = 0; 0 <= i ? _j < i : _j > i; p = 0 <= i ? ++_j : --_j) {
          for (j = _k = 1; 1 <= k ? _k < k : _k > k; j = 1 <= k ? ++_k : --_k) {
            if (n[p + i * j] !== n[p]) {
              flag = false;
            }
          }
        }
        if (flag) {
          return true;
        }
      }
      return null;
    };

    return LoopNumberSet;

  })(NAN.NumberSet);

  NAN.MultipleNumberSet = (function(_super) {

    __extends(MultipleNumberSet, _super);

    function MultipleNumberSet() {
      this.filter = __bind(this.filter, this);
      MultipleNumberSet.__super__.constructor.call(this);
      this.description = "多重数";
      this.minLength = 3;
      this.addFilter(this.filter);
      this.evaluate = this.lengthEvalutor2;
    }

    MultipleNumberSet.prototype.filter = function(n) {
      var flag, i, j, k, p, _i, _j, _k, _ref, _ref1, _ref2;
      if (n.length < 3) {
        return null;
      }
      for (i = _i = 2, _ref = n.length - 1; 2 <= _ref ? _i < _ref : _i > _ref; i = 2 <= _ref ? ++_i : --_i) {
        if (n.length % i !== 0) {
          continue;
        }
        k = n.length / i;
        flag = true;
        for (j = _j = 0; 0 <= k ? _j < k : _j > k; j = 0 <= k ? ++_j : --_j) {
          for (p = _k = _ref1 = i * j, _ref2 = i * (j + 1); _ref1 <= _ref2 ? _k < _ref2 : _k > _ref2; p = _ref1 <= _ref2 ? ++_k : --_k) {
            if (n[p] !== n[i * j]) {
              flag = false;
            }
          }
        }
        if (flag) {
          return true;
        }
      }
      return null;
    };

    return MultipleNumberSet;

  })(NAN.NumberSet);

  NAN.WaveNumberSet = (function(_super) {

    __extends(WaveNumberSet, _super);

    function WaveNumberSet() {
      this.filter = __bind(this.filter, this);
      WaveNumberSet.__super__.constructor.call(this);
      this.description = "波浪数";
      this.minLength = 3;
      this.addFilter(this.filter);
      this.evaluate = this.lengthEvalutor2;
    }

    WaveNumberSet.prototype.filter = function(n) {
      var i, lastDelta, newDelta, _i, _ref;
      if (n.length < 3) {
        return null;
      }
      lastDelta = 0;
      for (i = _i = 0, _ref = n.length - 1; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        newDelta = n[i + 1] - n[i];
        if (Math.abs(newDelta) !== 1) {
          return null;
        }
        if (lastDelta !== 0 && newDelta + lastDelta !== 0) {
          return null;
        }
        lastDelta = newDelta;
      }
      return true;
    };

    return WaveNumberSet;

  })(NAN.NumberSet);

  NAN.PowerNumberSet = (function(_super) {

    __extends(PowerNumberSet, _super);

    function PowerNumberSet() {
      PowerNumberSet.__super__.constructor.call(this);
    }

    PowerNumberSet.prototype.analyze = function(n) {
      var base, k, tmp, _i, _j, _len, _ref, _results;
      n = parseInt(n);
      _ref = (function() {
        _results = [];
        for (_j = 2; _j <= 100; _j++){ _results.push(_j); }
        return _results;
      }).apply(this).reverse();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        k = _ref[_i];
        base = Math.round(Math.pow(n, 1.0 / k));
        tmp = "" + k + "次方";
        if (k === 2) {
          tmp = "平方";
        }
        if (k === 3) {
          tmp = "立方";
        }
        if (Math.pow(base, k) === n) {
          return {
            score: k * k * base,
            description: "" + base + "的" + tmp
          };
        }
      }
      return null;
    };

    return PowerNumberSet;

  })(NAN.NumberSet);

  NAN.CloseToSomePowerOf2NumberSet = (function(_super) {

    __extends(CloseToSomePowerOf2NumberSet, _super);

    function CloseToSomePowerOf2NumberSet() {
      var a,
        _this = this;
      CloseToSomePowerOf2NumberSet.__super__.constructor.call(this);
      this.description = "接近2的幂";
      a = 1;
      while (a < NAN.maximumNumber) {
        this.numbers.push(a + 1);
        this.numbers.push(a - 1);
        a *= 2;
      }
      this.filters = [this.listFilter];
      this.evaluate = function(n) {
        return _this.sqrtEvalutor(n) / 4;
      };
    }

    return CloseToSomePowerOf2NumberSet;

  })(NAN.NumberSet);

  NAN.FactorialNumberSet = (function(_super) {

    __extends(FactorialNumberSet, _super);

    function FactorialNumberSet() {
      var a, i, _i,
        _this = this;
      FactorialNumberSet.__super__.constructor.call(this);
      this.description = "阶乘数";
      a = 1;
      for (i = _i = 1; _i <= 100; i = ++_i) {
        a = a * i;
        if (a >= NAN.maximumNumber) {
          break;
        }
        this.numbers.push(a);
      }
      this.filters = [this.listFilter];
      this.evaluate = function(n) {
        return _this.sqrtEvalutor(n);
      };
    }

    return FactorialNumberSet;

  })(NAN.NumberSet);

  NAN.PerfectNumberSet = (function(_super) {

    __extends(PerfectNumberSet, _super);

    function PerfectNumberSet() {
      var _this = this;
      PerfectNumberSet.__super__.constructor.call(this);
      this.description = "完全数";
      this.numbers = [6, 28, 496, 8128, 33550336, 8589869056];
      this.filters = [this.listFilter];
      this.evaluate = function(n) {
        return _this.sqrtEvalutor(n);
      };
    }

    return PerfectNumberSet;

  })(NAN.NumberSet);

  NAN.HundredNumberSet = (function(_super) {

    __extends(HundredNumberSet, _super);

    function HundredNumberSet() {
      var a, b, i, _i, _j,
        _this = this;
      HundredNumberSet.__super__.constructor.call(this);
      this.description = "除了开头全是0";
      a = 1;
      for (i = _i = 1; _i <= 1000; i = ++_i) {
        a = a * 10;
        for (b = _j = 1; _j <= 9; b = ++_j) {
          if (a * b >= NAN.maximumNumber) {
            break;
          }
          this.numbers.push(a * b);
        }
      }
      this.filters = [this.listFilter];
      this.evaluate = function(n) {
        return _this.sqrtEvalutor(n) / 10;
      };
    }

    return HundredNumberSet;

  })(NAN.NumberSet);

  NAN.AutomorphicNumberNumberSet = (function(_super) {

    __extends(AutomorphicNumberNumberSet, _super);

    function AutomorphicNumberNumberSet() {
      var _this = this;
      AutomorphicNumberNumberSet.__super__.constructor.call(this);
      this.description = "自守数";
      this.addFilter(function(n) {
        if (Math.pow(parseInt(n), 2).toString().split("").reverse().join("").indexOf(n.split("").reverse().join("")) === 0) {
          return true;
        }
        return null;
      });
      this.evaluate = this.sqrtEvalutor;
    }

    return AutomorphicNumberNumberSet;

  })(NAN.NumberSet);

  NAN.FibonacciNumberSet = (function(_super) {

    __extends(FibonacciNumberSet, _super);

    function FibonacciNumberSet() {
      var a, b, c, i, _i,
        _this = this;
      FibonacciNumberSet.__super__.constructor.call(this);
      this.description = "Fibonacci数";
      a = 0;
      b = 1;
      for (i = _i = 1; _i <= 1000; i = ++_i) {
        c = a + b;
        a = b;
        b = c;
        if (a >= NAN.maximumNumber) {
          break;
        }
        this.numbers.push(a);
      }
      this.filters = [this.listFilter];
      this.evaluate = function(n) {
        return Math.pow(parseInt(n), 0.6);
      };
    }

    return FibonacciNumberSet;

  })(NAN.NumberSet);

  NAN.PalindromicNumberSet = (function(_super) {

    __extends(PalindromicNumberSet, _super);

    function PalindromicNumberSet() {
      PalindromicNumberSet.__super__.constructor.call(this);
      this.minLength = 3;
      this.description = "回文数";
      this.evaluate = this.sqrtEvalutor;
      this.addFilter(function(n) {
        if (n.split("").reverse().join("") === n) {
          return true;
        }
        return null;
      });
    }

    return PalindromicNumberSet;

  })(NAN.NumberSet);

  NAN.prefixNumberSet = (function(_super) {

    __extends(prefixNumberSet, _super);

    function prefixNumberSet() {
      this.numbers = [];
      this.newNumber({
        number: "31415926535",
        description: "圆周率",
        score: 60
      });
      this.newNumber({
        number: "2718281828",
        description: "自然常数e",
        score: 60
      });
      this.newNumber({
        number: "1414213562",
        description: "根号2",
        score: 40
      });
    }

    prefixNumberSet.prototype.newNumber = function(num) {
      return this.numbers.push({
        number: num.number,
        description: num.description,
        score: num.score
      });
    };

    prefixNumberSet.prototype.getResult = function(n) {
      var numberInfo, _i, _len, _ref;
      _ref = this.numbers;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        numberInfo = _ref[_i];
        if (numberInfo.number.indexOf(n) === 0) {
          console.log(numberInfo.score, n.length);
          return {
            score: numberInfo.score * n.length * n.length,
            description: numberInfo.description + ("的前" + n.length + "位")
          };
        }
      }
      return null;
    };

    prefixNumberSet.prototype.analyze = function(n) {
      if (n.length < 3) {
        return null;
      }
      return this.getResult(n);
    };

    return prefixNumberSet;

  })(NAN.NumberSet);

  NAN.meaningfulNumberSet = (function(_super) {

    __extends(meaningfulNumberSet, _super);

    function meaningfulNumberSet() {
      this.numbers = [];
      this.newNumber({
        number: 42,
        description: "The answer to life,<br>the universe,<br>and everything",
        score: 100
      });
      this.newNumber({
        number: 59,
        description: "挂科啦",
        score: 50
      });
      this.newNumber({
        number: 63,
        description: "南南的生日",
        score: 200
      });
      this.newNumber({
        number: 603,
        description: "南南的生日",
        score: 200
      });
      this.newNumber({
        number: 950603,
        description: "南南的生日",
        score: 1000
      });
      this.newNumber({
        number: 19950603,
        description: "南南的生日",
        score: 10000
      });
      this.newNumber({
        number: 60,
        description: "谢老师不挂之恩",
        score: 70
      });
      this.newNumber({
        number: 360,
        description: "安全卫士",
        score: 70
      });
      this.newNumber({
        number: 211,
        description: "开发者的狗窝",
        score: 70
      });
      this.newNumber({
        number: 985,
        description: "看起来是一所好大学",
        score: 70
      });
      this.newNumber({
        number: 250,
        description: "大脑似乎出了点问题",
        score: 70
      });
      this.newNumber({
        number: 100,
        description: "学霸你够了",
        score: 70
      });
      this.newNumber({
        number: 99,
        description: "学霸你够了",
        score: 70
      });
      this.newNumber({
        number: 233,
        description: "很好笑的样子",
        score: 70
      });
      this.newNumber({
        number: 119,
        description: "着火啦",
        score: 70
      });
      this.newNumber({
        number: 120,
        description: "救护车?",
        score: 70
      });
      this.newNumber({
        number: 110,
        description: "救命!",
        score: 70
      });
      this.newNumber({
        number: 12306,
        description: "和谐号",
        score: 70
      });
      this.newNumber({
        number: 95566,
        description: "中国银行",
        score: 70
      });
      this.newNumber({
        number: 1024,
        description: "凑个整",
        score: 70
      });
      this.newNumber({
        number: 404,
        description: "Not Found",
        score: 70
      });
      this.newNumber({
        number: 520,
        description: "爱的誓言",
        score: 270
      });
      this.newNumber({
        number: 521,
        description: "爱的誓言",
        score: 270
      });
      this.newNumber({
        number: 23,
        description: "就知道23",
        score: 20
      });
      this.newNumber({
        number: 365,
        description: "平年的天数",
        score: 20
      });
      this.newNumber({
        number: 366,
        description: "闰年的天数",
        score: 20
      });
      this.newNumber({
        number: 86400,
        description: "一天的秒数",
        score: 20
      });
      this.newNumber({
        number: 1440,
        description: "一天的分钟数",
        score: 20
      });
      this.newNumber({
        number: 3600,
        description: "一小时的秒数",
        score: 20
      });
    }

    meaningfulNumberSet.prototype.newNumber = function(num) {
      return this.numbers.push({
        number: num.number,
        description: num.description,
        score: num.score
      });
    };

    meaningfulNumberSet.prototype.getResult = function(n) {
      var numberInfo, _i, _len, _ref;
      _ref = this.numbers;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        numberInfo = _ref[_i];
        if (numberInfo.number === n) {
          return {
            score: numberInfo.score,
            description: numberInfo.description
          };
        }
      }
      return null;
    };

    meaningfulNumberSet.prototype.analyze = function(n) {
      n = parseInt(n);
      return this.getResult(n);
    };

    return meaningfulNumberSet;

  })(NAN.NumberSet);

  NAN.Analyzer = (function() {

    function Analyzer() {
      var key;
      this.numberSets = [];
      for (key in NAN) {
        if (key.toString().indexOf("NumberSet") > 0) {
          this.numberSets.push(new NAN[key.toString()]);
        }
      }
    }

    Analyzer.prototype.analyze = function(n) {
      var descriptions, info, numberSet, propertiesCount, result, score, _i, _len, _ref;
      score = 0;
      descriptions = [];
      propertiesCount = 0;
      _ref = this.numberSets;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        numberSet = _ref[_i];
        result = numberSet.analyze(n);
        console.log(result);
        if (result === null) {
          continue;
        }
        result.score = Math.round(result.score);
        score += result.score;
        propertiesCount += 1;
        descriptions.push(result.description);
      }
      info = {
        score: Math.floor(score * propertiesCount),
        descriptions: descriptions
      };
      console.log(info);
      return info;
    };

    return Analyzer;

  })();

}).call(this);
