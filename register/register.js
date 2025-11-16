
function participateTemplate(count) {
    let count = 1;

    newParticipants = addEventListener("click", ()=>{count++});

    <section class="participant${count}">
}

function submitForm(event) {
    event.preventDefault();

}

function totalFees() {
    let feeElements = document.querySelectorAll ("id^=fee");
    console.log(feeElements);
}