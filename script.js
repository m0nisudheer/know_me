var audio = new Audio('assets/sentmessage.mp3');


var contactString = "<div class='social'>"
    + "<a target='_blank' href='mailto:manisudheer383@gmail.com'>"
    + "<div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div>"
    + "</a>"
    + "<a target='_blank' href='https://github.com/m0nisudheer'>"
    + "<div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div>"
    + "</a>"
    + "</div>";
var resumeString = "<img src='images/resume.jpg' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>RESUME.pdf</label></div><a href='./assets/RESUME.pdf' download='RESUME.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";



var skills = "<div class='social'>"
    + "<b>Visit my portfolio website👇</b><br/><br/><a target='_blank' href='https://m0nisudheer.github.io/'>"
    + "<div class='socialItem'><img class='socialItemI' src='images/website.svg' height='30px' width='30px' alt=''></div>"
    + "</a>"
    + "</div>";


function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var period = hours >= 12 ? 'pm' : 'am';

    // Convert hours from 24-hour to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)

    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + hours + ":" + (minutes < 10 ? '0' + minutes : minutes) + ' ' + period;
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var period = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)

    dateLabel.innerText = hours + ":" + (minutes < 10 ? '0' + minutes : minutes) + ' ' + period;
    
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Mani Sudheer</a></span>.<br><br>I'm a graduate with a Bachelor's degree in Computer Science and Engineering from <span class='bold'>Bapatla Engineering College 👨🏻‍💻📚</span>.<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>");
            }, 2500);
            break;
            case "help":
                setTimeout(() => {
                    sendTextMessage(`
                        <span class='sk'>
                            <b>Send a keyword to get what you want to know about me</b> 💬
                            <br><br>
                            <table style="border-collapse: collapse; width: 100%; border: 1px solid #ddd;">
                                <thead>
                                    <tr>
                                        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Keyword</th>
                                        <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style="border: 1px solid #ddd; padding: 8px;"><span class='bold'>skills</span></td>
                                        <td style="border: 1px solid #ddd; padding: 8px;">To know my skills</td>
                                    </tr>
                                    <tr>
                                        <td style="border: 1px solid #ddd; padding: 8px;"><span class='bold'>resume</span></td>
                                        <td style="border: 1px solid #ddd; padding: 8px;">To get my resume</td>
                                    </tr>
                                    <tr>
                                        <td style="border: 1px solid #ddd; padding: 8px;"><span class='bold'>education</span></td>
                                        <td style="border: 1px solid #ddd; padding: 8px;">To get my education details</td>
                                    </tr>
                                    <tr>
                                        <td style="border: 1px solid #ddd; padding: 8px;"><span class='bold'>contact</span></td>
                                        <td style="border: 1px solid #ddd; padding: 8px;">To connect with me</td>
                                    </tr>
                                    <tr>
                                        <td style="border: 1px solid #ddd; padding: 8px;"><span class='bold'>projects</span></td>
                                        <td style="border: 1px solid #ddd; padding: 8px;">To get details of my projects</td>
                                    </tr>
                                    <tr>
                                        <td style="border: 1px solid #ddd; padding: 8px;"><span class='bold'>clear</span></td>
                                        <td style="border: 1px solid #ddd; padding: 8px;">To clear conversation</td>
                                    </tr>
                                </tbody>
                            </table>
                        </span>
                    `);
                }, 2000);
            
            break;
        case "resume":
            setTimeout(() => {
            sendTextMessage(resumeString);
        }, 2000);
            break;
        case "skills":
            setTimeout(() => {
            sendTextMessage(skills);
        }, 2000);
            break;
        case "education":
            setTimeout(() => {
            sendTextMessage("I completed my B.Tech degree in <b>Computer Science and Engineering</b> from <b>Bapatla Engineering College</b>.<br>Passing Year: <b>2024</b><br>Result: <b>82%</b><br><br>I completed my <b>Intermediate</b> from <b>Tirumala Junior College.</b><br>Passing Year: <b>2020</b><br>Result: <b>95%</b><br><br>I completed my <b>Secondary school education</b> at <b>Bhashyam Public School.</b><br>Passing Year: <b>2018</b><br>Result:<b> 100%</b>");
        }, 2000);
            break;
        case "clear":
            clearChat();
            break;
        case "contact":
            setTimeout(() => {
            sendTextMessage("<b>Let's connect</b>☎️\n"+contactString);
        }, 2000);
            break;
        case "projects":
            setTimeout(() => {
            sendTextMessage("<b>Interested in my projects? Dive into my GitHub account to see more</b>👇<br/><div class='social'><a target='_blank' href='https://github.com/m0nisudheer'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
        }, 2000);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Sorry, I didn't understand that...☹️");
            }, 2000);
        
            setTimeout(() => {
                sendTextMessage("Send <span class='bold'>'help'</span> to know more about me.");
            }, 2500);
            break;
    }                         
}
function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}
function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 100);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var period = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)

    dateLabel.innerText = hours + ":" + (minutes < 10 ? '0' + minutes : minutes) + ' ' + period;
    
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 100);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var period = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)

    dateLabel.innerText = hours + ":" + (minutes < 10 ? '0' + minutes : minutes) + ' ' + period;
    
    dateLabel.setAttribute("class", "dateLabel");
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}



// Function to show the loader
function showLoader() {
    document.getElementById('loader').style.display = 'flex';
}

// Function to hide the loader
function hideLoader() {
    document.getElementById('loader').style.display = 'none';
}

// Example usage
document.addEventListener('DOMContentLoaded', () => {
    // Show the loader when starting an operation
    showLoader();

    // Simulate a delay (e.g., for data loading)
    setTimeout(() => {
        // Hide the loader when the operation is complete
        hideLoader();
    }, 1500); // Adjust the timeout as needed
});





function playSound() {
    audio.play();
}
