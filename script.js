function onReady(callback) {
	(document.readyState === 'interactive' || document.readyState === 'complete') ? callback() : document.addEventListener('DOMContentLoaded', callback);
};

function runQuoteApp(){
    var add = document.getElementById('new');
    var modal = document.getElementById('myModal');
    var save = document.getElementById('save');
    var refresh = document.getElementById('refresh');
    var message = document.getElementById('message');
    var quote = document.getElementById('quote-area');
    var background = document.getElementById('image-area');
    var inputfield = document.getElementById('quote');
    var span = document.getElementsByClassName("close")[0]; /**  Get the <span> element that closes the modal  */
    var quotes = ['make hay', 
                 'get shit done',
                 'Move fast and break things'];

    quote.innerHTML = quotes[1]; /** Set initial content for quote and image upon page load */
    background.style.backgroundImage = "url('images/bg2.jpg')";
    //console.log(quotes);
    

    function openModal(){
        modal.style.display = 'block';

        span.onclick = function() {
            modal.style.display = 'none';
        }
        save.onclick = function() {
            var quote = document.getElementById('quote').value;
            (quotes.push(quote)) ? message.innerHTML= 'Successfully saved' : message.innerHTML = 'Oops, try again';
            inputfield.textContent = ' ';
        }
}
    function refreshQuote(){
        //change bg image
        var randomquote = Math.floor((Math.random() * quotes.length));
        var randomimage = Math.floor((Math.random() * 3)+1);
        //var randomimage = 1;
        let currentquote = quotes[randomquote];
        quote.innerHTML = currentquote;
        var imageurl = 'url('+ 'images/bg' + randomimage + '.jpg'+')';
        background.style.backgroundImage = imageurl;
        //change quote
    }
    refresh.addEventListener('click', refreshQuote)
    add.addEventListener('click', openModal)

}
onReady(runQuoteApp)



