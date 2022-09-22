$(function(){
    const url = new URL(window.location.href);
    const params = url.searchParams;

    const category = params.get("category");
    const company_name = params.get("company_name");
    const client_name = params.get("client_name");
    const client_kana = params.get("client_kana");
    const tel = params.get("tel");
    const email = params.get("email");
    const re_email = params.get("re_email");
    const contact_means = params.get("contact_means");
    const checkbox1 = params.get("checkbox1");
    const checkbox2 = params.get("checkbox2");
    const checkbox3 = params.get("checkbox3");
    const checkbox4 = params.get("checkbox4");
    const inquiry_details = params.get("inquiry_details");
    const agreed = params.get("agreed");

    if(! (category == null)) {
        document.getElementById("receivedCategory").innerText = category;
        document.getElementById("receivedCompanyName").innerText = company_name;
        document.getElementById("receivedClientName").innerText = client_name;
        document.getElementById("receivedClientKana").innerText = client_kana;
        document.getElementById("receivedTel").innerText = tel;
        document.getElementById("receivedEmail").innerText = email;
        document.getElementById("receivedReEmail").innerText = re_email;
        document.getElementById("receivedContactMeans").innerText = contact_means;
        document.getElementById("receivedCheckbox1").innerText = checkbox1;
        document.getElementById("receivedCheckbox2").innerText = checkbox2;
        document.getElementById("receivedCheckbox3").innerText = checkbox3;
        document.getElementById("receivedCheckbox4").innerText = checkbox4;
        document.getElementById("receivedInquiryDetails").innerText = inquiry_details;
        document.getElementById("receivedAgreed").innerText = agreed;
    }
});