function surligne(champ, erreur)
{
    if(erreur)
        champ.style.backgroundColor = "#deb887";
    else
        champ.style.backgroundColor = "";

}
function verifName(champ)

{
    if(champ.value.length < 2 || champ.value.length >12)
    {
        surligne(champ, true);
        return false;
    }
    else
    {
        surligne(champ, false);
        return true;
    }
}

function verifMail(champ)
{
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(!regex.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifForm(f)
{
   var nameOk = verifName(f.name);
   var mailOk = verifMail(f.mail);

   if(nameOk &&  mailOk)
{
      return true;
}
   else
   {
      alert("Veuillez remplir correctement tous les champs");
      return false;
   }

}