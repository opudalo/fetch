export default function(url, onload) {
  if (!url) return
  setTimeout(fetch, 1)

  function fetch() {
    var doc = document
      , get = doc.getElementsByTagName
      , el = get('script')[0] || get('head')[0].firstChild
      , script = doc.createElement('script')
      
    script.type = 'text/javascript'
    script.async = true
    onload && script.onload = onload
    script.src = url
    el.parentNode.insertBefore(script, el)
  }
}
