input.onButtonPressed(Button.A, function () {
    WiFiBit.executeHttpMethod(
    HttpMethod.GET,
    "https://reasearchschoolgitter.github.io/",
    80,
    "site/posta.html"
    )
})
input.onButtonPressed(Button.B, function () {
    WiFiBit.executeHttpMethod(
    HttpMethod.GET,
    "https://reasearchschoolgitter.github.io/",
    80,
    "site/postb.html"
    )
})
WiFiBit.connectToWiFiBit()
WiFiBit.connectToWiFiNetwork("chrome", "wifichrome123")
basic.forever(function () {
    WiFiBit.executeHttpMethod(
    HttpMethod.GET,
    "https://reasearchschoolgitter.github.io/",
    80,
    "site/scores.json"
    )
})
