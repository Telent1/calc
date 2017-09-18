// 键盘输入监听事件
window.addEventListener('keypress',function(event) {
  if (event.keyCode >= 48 && event.keyCode <= 57) {
    functionClick(event.key.toString())
  } else if (event.keyCode == 47 || event.keyCode == 42 || event.keyCode == 45 || event.keyCode == 43 || event.keyCode == 46) {
    functionClick(event.key.toString())
  } else if(event.keyCode == 13) {
    functionClick('=')
  }
})
// 对输入的数字进行判断并进行计算
var input = ''
var previousInput = ''
function functionClick(params) {
  console.log('params', params)
  var calcInput = document.getElementById('calcInput').innerHTML
  var result = document.getElementById('result').innerHTML
  if ((params == '/' || params == '*' || params == '-' || params == '+')) {
    if (previousInput != '/' && previousInput != '*' && previousInput != '-' && previousInput != '+') {
      calc()
      function calc() {
        console.log('calc')
        if (calcInput.indexOf('/') != -1) {
          let arr = calcInput.split('/')
          if (Number(arr[1]) == 0) {
            result = '除数不能为0'
          } else {
            result = Number(arr[0]) / Number(arr[1])
          }
        } else if (calcInput.indexOf('*') != -1) {
          let arr = calcInput.split('*')
          result = Number(arr[0]) * Number(arr[1])
        } else if (calcInput.indexOf('-') != -1) {
          let arr = calcInput.split('-')
          result = Number(arr[0]) - Number(arr[1])
        } else if (calcInput.indexOf('+') != -1) {
          let arr = calcInput.split('+')
          result = Number(arr[0]) + Number(arr[1])
        }
        result = result.toString()
        result = result.substring(0, 9)
        document.getElementById('result').innerHTML = result
        calcInput = document.getElementById('calcInput').innerHTML
        result = document.getElementById('result').innerHTML
      }
    } else {
      let len = calcInput.length
      console.log('len', len)
      calcInput = calcInput.substring(0, len)
      document.getElementById('calcInput').innerHTML = calcInput + params
    }
  }
  switch (params) {
    case 'ac':
      document.getElementById('calcInput').innerHTML = '0'
      document.getElementById('result').innerHTML = '0'
      previousInput = ''
      break;
    case '/':
      if (previousInput != '') {
        if (previousInput != '/' && previousInput != '*' && previousInput != '-' && previousInput != '+') {
          if ((result == '0' || calcInput != '0') && previousInput != '=') {
            document.getElementById('calcInput').innerHTML = calcInput + '/'
          } else {
            document.getElementById('calcInput').innerHTML = result + '/'
          }
        } else {
          let len = calcInput.length
          calcInput = calcInput.substring(0, len - 1)
          document.getElementById('calcInput').innerHTML = calcInput + '/'
        }
      } else {
        document.getElementById('calcInput').innerHTML = calcInput + '/'
      }
      break;
    case '*':
      if (previousInput) {
        if (previousInput != '/' && previousInput != '*' && previousInput != '-' && previousInput != '+') {
          if ((result == '0' || calcInput != '0') && previousInput != '=') {
            document.getElementById('calcInput').innerHTML = calcInput + '*'
          } else {
            document.getElementById('calcInput').innerHTML = result + '*'
          }
        } else {
          let len = calcInput.length
          calcInput = calcInput.substring(0, len - 1)
          document.getElementById('calcInput').innerHTML = calcInput + '*'
        }
      } else {
        document.getElementById('calcInput').innerHTML = calcInput + '*'
      }
      break;
    case '-':
      if (previousInput) {
        if (previousInput != '/' && previousInput != '*' && previousInput != '-' && previousInput != '+') {
          if ((result == '0' || calcInput != '0') && previousInput != '=') {
            document.getElementById('calcInput').innerHTML = calcInput + '-'
          } else {
            document.getElementById('calcInput').innerHTML = result + '-'
          }
        } else {
          let len = calcInput.length
          calcInput = calcInput.substring(0, len - 1)
          document.getElementById('calcInput').innerHTML = calcInput + '-'
        }
      } else {
        document.getElementById('calcInput').innerHTML = calcInput + '-'
      }
      break;
    case '+':
      if (previousInput) {
        if (previousInput != '/' && previousInput != '*' && previousInput != '-' && previousInput != '+') {
          if ((result == '0' || calcInput != '0') && previousInput != '=') {
            document.getElementById('calcInput').innerHTML = calcInput + '+'
          } else {
            document.getElementById('calcInput').innerHTML = result + '+'
          }
        } else {
          let len = calcInput.length
          calcInput = calcInput.substring(0, len - 1)
          document.getElementById('calcInput').innerHTML = calcInput + '+'
        }
      } else {
        document.getElementById('calcInput').innerHTML = calcInput + '+'
      }
      break;
      case '=':
        if (calcInput.indexOf('/') != -1) {
          let arr = calcInput.split('/')
          if (Number(arr[1]) == '0') {
            result = '除数不能为0'
          } else {
            result = Number(arr[0]) / Number(arr[1])
          }
        } else if (calcInput.indexOf('*') != -1) {
          let arr = calcInput.split('*')
          result = Number(arr[0]) * Number(arr[1])
        } else if (calcInput.indexOf('-') != -1) {
          let arr = calcInput.split('-')
          result = Number(arr[0]) - Number(arr[1])
        } else if (calcInput.indexOf('+') != -1) {
          let arr = calcInput.split('+')
          result = Number(arr[0]) + Number(arr[1])
        }
        result = result.toString()
        result = result.substring(0, 9)
        document.getElementById('result').innerHTML = result
        // document.getElementById('calcInput').innerHTML = result
      break;
      case '.':
      console.log('.')
      if (previousInput) {
        if (previousInput != '/' && previousInput != '*' && previousInput != '-' && previousInput != '+') {
          document.getElementById('calcInput').innerHTML = calcInput + '.'
        } else {
          document.getElementById('calcInput').innerHTML = calcInput + '0.'
        }
      } else {
        document.getElementById('calcInput').innerHTML = calcInput + '0.'
      }
      break;
    default:
      if (previousInput != '=' && previousInput != '') {
        if (previousInput != '0') {
          document.getElementById('calcInput').innerHTML = calcInput + params
        } else {
          let len = calcInput.length
          calcInput = calcInput.substring(0, len - 1)
          document.getElementById('calcInput').innerHTML = calcInput + params
        }
      } else if (previousInput == '=') {
        document.getElementById('calcInput').innerHTML = params
      }else {
        let len = calcInput.length
        calcInput = calcInput.substring(0, len - 1)
        document.getElementById('calcInput').innerHTML = calcInput + params
      }
      break;
  }
  if (params != 'ac') {
    previousInput = params
  }
  console.log('pre', previousInput)
}