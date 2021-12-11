(function(window, undefined) {
  var dictionary = {
    "ec508d7d-7188-4bca-a934-b03778689d50": "Banco_Screen",
    "c83a3fce-8b15-4c4f-a4c4-ed76c97283e5": "learn_more_Screen",
    "94d68c91-3025-4e19-8862-1208d0a252e8": "Triagem_Screen",
    "e4881f6b-6ece-4234-99b0-0ecfd52692cd": "OneTime_Screen",
    "4b56ff1f-7619-4b91-b310-a829cbafccda": "TeleConsulta_Patient_Screen",
    "6638ae1f-e70e-449c-ae56-43e08d09d71b": "TeleConsulta_Doctor_Screen",
    "57fd5406-8e77-486c-9875-594c6b0c2b84": "user_signup_Screen",
    "fa7ae163-d76e-41c0-b159-b1e757c39f7b": "doctor_signup_Screen",
    "9f14f9d8-1ed4-4088-a0a4-3a2a4bd22ace": "Client_Profile_Screen",
    "3a949450-71d8-41f8-b215-66b24eb88982": "doctor_signup_creds_Screen",
    "7c22b4ce-3c06-48f2-878a-302c08d2ff63": "Client_Inbox_Screen",
    "27bd844f-f37e-4810-9268-68fecbab2f90": "user_signup_history_update_Screen",
    "566141aa-476f-4fb2-8358-2b5d7914355e": "Donation_Screen",
    "0be4d210-1ebc-4216-a8e2-4a03f29c9334": "MonthlyPledge_Screen",
    "c11a5deb-45c6-4e0d-b18e-9d58a71b7399": "Triagem_Doctor_Screen",
    "86d75f41-17e7-4c1f-9449-af31880b38a2": "Doc_Profile_Screen",
    "6dd51281-9981-4aec-b3b2-3ed1953c4f7b": "Doc_Inbox_Screen",
    "4f3342dd-639c-4aa5-939f-06f606b98d36": "pedido_de_consulta_Screen",
    "45345c9a-bf5f-4ba1-9e56-60ffcd0a6a9a": "get_a_doc_Screen",
    "2120e861-0649-48a5-bd9b-bac81b869cc0": "Iniciar_Consulta_Screen",
    "bfe908fe-7b8c-4137-9457-c376a66ebfba": "Patients_Screen",
    "96f5bb94-04a3-4291-b66a-f83477834efa": "Icome_Screen",
    "16584f11-966e-43e4-94de-d521f9b65f64": "IniciarTriagem_Screen",
    "9c898df9-2f86-4e10-951d-6fbec25573f5": "user_signup_end_Screen",
    "a5980954-59a4-4641-942f-46a7fb656e6c": "DashBoard_Client_Screen",
    "e383144c-c7b6-4c0e-8a84-a7baccdf0003": "user_signup_history_Screen",
    "1dceb606-b45f-41f5-8b47-30aa54e81cf6": "DashBoard_Doc_Screen",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home_Screen",
    "8d0b66ef-016b-497a-a857-30063e77d4d4": "Initial",
    "ad92fab5-9550-4acd-b7b0-ef4680724420": "Starter",
    "1f6e6418-1e23-42b5-b016-6759e46cbfc9": "Empty",
    "0ca93ab2-5d36-4cc1-97dc-aa00796d19bb": "Home_cli",
    "34a29da9-b0ee-4197-ad2c-f8d47adad053": "Home_doc",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);