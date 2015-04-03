export default function(url, onload) {
  if (!url) return
  setTimeout(fetch, 1)

  function fetch() {
    var doc = document
      , el = doc.querySelector('script') || doc.querySelector('head').firstChild
      , script = doc.createElement('script')

    script.type = 'text/javascript'
    script.async = true
    if (onload) script.onload = onload
    script.src = url
    el.parentNode.insertBefore(script, el)
  }
}
