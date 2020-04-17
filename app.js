const btn = document.querySelector(".speakBtn")
const speech = document.querySelector(".speech")


speech.innerText = 'Tell me what you need right now? click the button to speak'


const greet = ['am good', 'am doing great', 'am fine', 'am doing well', 'hi what can i do for you?']

const weather = ['why do you care about the weather? you are not allow to go out during this covid 19 pandemic or you get beaten by the Nigeria police', 'dont be naughty, youre not allow to go out during covid 19 pandemic, so why do you care about the weather?']

   const time = new Date().toLocaleTimeString()
   
   const date = new Date().toLocaleDateString()



// setting speech recognignition
const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognize = new speechRecognition()

// onstart statement for voice recognition
recognize.onstart = function () {
    console.log("Listening to you, start speeking to microphone")
    
    speech.innerText = 'Listening...'
    
}

// onrusult
recognize.onresult = function (event) {


    const transcript = event.results[0][0].transcript
    speech.textContent = transcript

    readLoud(transcript)
}

btn.addEventListener('click', () => {
    recognize.start()
})

function readLoud(message) {
    const speech = new SpeechSynthesisUtterance()
    
       speech.text = 'i dont know about' + ' ' + message + ' ' + ' You can ask me about the weather, the time right now, todays date, dark mode' + ' ' +'light mode, or ask about the developer of this app'
    
    
    if (message.includes('how are you') || message.includes('hey') || message.includes('hi') || message.includes('hello')){
      const speekText = greet[Math.floor(Math.random() * greet.length)]
      
      speech.text = speekText;
    }
    
    if (message.includes('weather')) {
      const weatherReport = weather[Math.floor(Math.random() * weather.length)]
      speech.text = weatherReport
      
    }
    
    
    
    if (message.includes('time')) {
      speech.text = `The time is ${time}`
    }
    
    
    if (message.includes('date')) {
      speech.text = `The date is ${date}`
    }
    
    var newUrl = 'https://www.google.com/'
    
    if (message.includes('dark mode')) {
        
        document.body.style.backgroundColor = '#222'
        
        const speechResult = document.getElementById('speechResult')
        speechResult.style.color = '#f2f2f2'
        
        speech.text = 'dark mode activated'
    }
    
    
    
    if (message.includes('light mode')) {
    
      document.body.style.backgroundColor = '#f2f2f2'
    
      const speechResult = document.getElementById('speechResult')
      speechResult.style.color = '#222222'
    
      speech.text = 'light mode activated'
    }
    
    if (message.includes('develop') || message.includes('author') || message.includes('wayfly') || message.includes('samson')){
      
      speech.text = 'wayfly is the developer of this app, and the development is still in progress,  this is just for testing purpose and feedback, if you want to know more about him, visit SEOscool.com'
    }
    
    if (message.includes('money') || message.includes('food') || message.includes('cash') || message.includes('job') || message.includes('work')) {
      
      speech.text = 'go and ask buhari, your president, am not a' + ' ' + message + ' ' + 'machine' + ' ' + ' and not the cause for covid 19 pandemic'
    }
    
    speech.volume = 1
    speech.rate = 0.8
    speech.pitch = 1

    window.speechSynthesis.speak(speech)
} 
