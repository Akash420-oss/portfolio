import { senddata } from 'backend/google_sheets';
$w('#granted').hide();
$w('#denied').hide();
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
$w('#button5').onClick(async (event) => {
    const firstname = $w('#input1').value;
    const lastname = $w('#input2').value;
    const email = $w('#input3').value;
    const subject = $w('#input4').value;
    const msg = $w('#textBox1').value;
    if (firstname == $w('#input1').value || lastname == $w('#input2').value || email == $w('#input3').value || subject == $w('#input4').value || msg == $w('#textBox1').value) {
        $w('#input1').value = "";
        $w('#input2').value = "";
        $w('#input3').value = "";
        $w('#input4').value = "";
        $w('#textBox1').value = "";
        $w('#input1').resetValidityIndication();
        $w('#input2').resetValidityIndication();
        $w('#input3').resetValidityIndication();
        $w('#input4').resetValidityIndication();
        $w('#textBox1').resetValidityIndication();
    }
    if (!email.endsWith("@gmail.com")){ 
    $w('#button5').hide();
        $w('#denied').show();
        await delay(9000);
        $w('#denied').hide();
        $w('#button5').show();

    } else {
        $w('#button5').show();
        const values = [firstname, lastname, email, subject, msg];
        const result = await senddata(values);
     
        $w('#button5').hide();
        $w('#granted').show();
        await delay(9000);
        $w('#granted').hide();
        $w('#button5').show();
    }

});
$w('#input1').onCustomValidation((value) => {
    if (value === "") {
        $w('#button5').hide();
    } else {
        $w('#button5').show();
        $w('#button5').disable();
    }
});
$w('#input2').onCustomValidation((value) => {
    if (value === "") {
        $w('#button5').disable();
    } else {
        $w('#button5').enable();
    }
});