let currentStep = 1;
function nextStep(step) {
    let inputs;
    if (step === 1) {
        inputs = document.getElementsByClassName('step1-field-req');
        for (let inp of inputs) {
            if (inp.value === '') {
                document.getElementById('error-msg').style.display = 'block';
                return;
            }
        }

    } else if (step === 2) {
        inputs = document.getElementsByClassName('step2-field-req');
        let checkBox = document.getElementsByClassName('check-box-val');
        for (let inp of inputs) {
            if (inp.value === '') {
                document.getElementById('error-msg').style.display = 'block';
                return;
            }
        }
        let sw = false;
        for (let ch of checkBox) {
            if (ch.checked) {
                sw = true;
            }
        }

        if (!sw) {
            document.getElementById('error-msg').style.display = 'block';
            return;
        }
    }

    document.getElementById(`step${step}`).style.display = 'none';
    currentStep++;
    document.getElementById(`step${currentStep}`).style.display = 'block';
    document.getElementById('error-msg').style.display = 'none';
}

function prevStep(step) {
    document.getElementById(`step${step}`).style.display = 'none';
    currentStep--;
    document.getElementById(`step${currentStep}`).style.display = 'block';
}

function showForm() {
    document.getElementById('step1').style.display = 'block';
    document.getElementById('showButton').style.display = 'none';
}

document.getElementById('submit-form').addEventListener('click', () => {
    document.getElementById('anjoman').submit()
})

