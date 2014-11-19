module.exports = function(url) {
  setTimeout(fetch, 1)
  
  function fetch() {
    var d = document, f = d.getElementsByTagName('script')[0], s = d.createElement('script')
    s.type = 'text/javascript'
    s.async = true
    s.src = url
    f.parentNode.insertBefore(s, f)
  }
}
