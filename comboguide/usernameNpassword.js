function usernameNpassword() //combine the first and last names for username & password
{
    var result = PFGetValue("first") + "." + PFGetValue("last");
    return result;
}
