
var templateFields =
[
   {
      "type":"accordion",
      "name":"General Information to Help Build Your Brochur",
      "conditionExpression":"true",
      "components":[
         {
            "type":"text",
            "label":"Company Name",
            "model":"Company_Name",
            "name":"Company_Name"
         },
         {
            "type":"select",
            "model":"Funding_Type",
            "label":"Funding Type",
            "name":"Funding_Type",
            "empty":"Please select",
            "options":{
               "ASO":{
                  "label":"ASO"
               },
               "Fully Insured":{
                  "label":"Fully Insured"
               }
            }
         },
         {
            "type":"select",
            "model":"Funding_Type_Follow_Up",
            "label":"Is your customer located in one or both of the following states?",
            "name":"Funding_Type_Follow_Up",
            "empty":"Please select",
            "options":{
               "Neither":{
                  "label":"Neither"
               },
               "New York":{
                  "label":"New York"
               },
               "Illinois":{
                  "label":"Illinois"
               },
               "Both":{
                  "label":"Both"
               }
            }
         },
         {
            "type":"select",
            "model":"Line_of_Business",
            "label":"Line of Buisness",
            "name":"Line_of_Business",
            "empty":"Please select",
            "options":{
               "National Accounts":{
                  "label":"National Accounts"
               },
               "Key Accounts":{
                  "label":"Key Accounts"
               },
               "Small Buisness":{
                  "label":"Small Buisness"
               },
               "Public Sector":{
                  "label":"Public Sector"
               }
            }
         },
         {
            "type":"select",
            "model":"Union_Audience",
            "label":"Audience",
            "name":"Union_Audience",
            "empty":"Non-Union",
            "options":{
               "Non-Union":{
                  "label":"Non-Union"
               },
               "Union":{
                  "label":"Union"
               }
            }
         }
      ]
   },
   {
      "type":"accordion",
      "name":"Cover",
      "conditionExpression":"true",
      "components":[
         {
            "type":"select",
            "model":"Cover_Image",
            "label":"Cover Image",
            "name":"Cover_Image",
            "options":{
               "Cover 1":{
                  "label":"Cover 1"
               },
               "Cover 2":{
                  "label":"Cover 2"
               },
               "Cover 3":{
                  "label":"Cover 3"
               },
               "Cover 4":{
                  "label":"Cover 4"
               },
               "Cover 5":{
                  "label":"Cover 5"
               },
               "Cover 6":{
                  "label":"Cover 6"
               }
            }
         },
         {
            "type":"button",
            "model":"btnPictureBrowseCover_Image",
            "label":"Gallery",
            "name":"btnPictureBrowseCover_Image"
         },
         {
            "type":"file",
            "model":"Customer_Logo_InputCell",
            "label":"Customer Logo",
            "name":"Customer_Logo_InputCell"
         },
         {
            "type":"select",
            "model":"Company_Name_OnCover",
            "label":"Include Company Name on Cover?",
            "name":"Company_Name_OnCover",
            "options":{
               "No":{
                  "label":"No"
               },
               "Yes":{
                  "label":"Yes"
               }
            }
         },
         {
            "type":"text",
            "model":"Cover_Company_Name",
            "label":"Custom Company Name for Cover",
            "name":"Cover_Company_Name",
            "conditionExpression":"formData.Company_Name_OnCover == 'Yes'"
         }
      ]
   },
   {
      "type":"accordion",
      "name":"Product",

      "conditionExpression":"true",
      "components":[
         {
            "type":"select",
            "label":"Include Health Plan pages?",
            "model":"Health_Plans",
            "name":"Health_Plans",
            "empty":"Please select",
            "options":{
               "No":{
                  "label":"No"
               },
               "Yes":{
                  "label":"Yes"
               }
            }
         },
         {
            "type":"select",
            "label":"Number of Health Plans",
            "model":"Total_Plan_Quantity",
            "name":"Total_Plan_Quantity",
            "empty":"Please select",
            "conditionExpression":"formData.Health_Plans == 'Yes'",
            "options":{
               "0":{
                  "label":"0"
               },
               "1":{
                  "label":"1"
               },
               "2":{
                  "label":"2"
               },
               "3":{
                  "label":"3"
               },
               "4":{
                  "label":"4"
               },
               "5":{
                  "label":"5"
               },
               "6":{
                  "label":"6"
               },
               "7":{
                  "label":"7"
               }
            }
         },
         {
            "type":"select",
            "label":"FSA?",
            "model":"FSA",
            "name":"FSA",
            "empty":"Please select",
            "options":{
               "No":{
                  "label":"No"
               },
               "Yes":{
                  "label":"Yes"
               }
            }
         },
         {
            "type":"text",
            "label":"Field 1",
            "model":"Table_Header_1",
            "name":"Table_Header_1",
            "defaultValue":"EE",
            "conditionExpression":"formData.Health_Plans == 'Yes'"
         },
         {
            "type":"text",
            "label":"Field 2",
            "model":"Table_Header_2",
            "name":"Table_Header_2",
            "defaultValue":"EE+1",
            "conditionExpression":"formData.Health_Plans == 'Yes'"
         },
         {
            "type":"text",
            "label":"Field 3",
            "model":"Table_Header_3",
            "name":"Table_Header_3",
            "defaultValue":"EE+Children",
            "conditionExpression":"formData.Health_Plans == 'Yes'"
         },
         {
            "type":"text",
            "label":"Field 4",
            "model":"Table_Header_4",
            "name":"Table_Header_4",
            "defaultValue":"Family",
            "conditionExpression":"formData.Health_Plans == 'Yes'"
         },
         {
            "type":"select",
            "label":"Does your customer have OptumRx?",
            "model":"Optum_Rx",
            "name":"Optum_Rx",
            "conditionExpression":"formData.Health_Plans == 'Yes'",
            "options":{
               "No":{
                  "label":"No"
               },
               "Yes":{
                  "label":"Yes"
               }
            }
         },
         {
            "type":"select",
            "label":"Does your customer have Virtual Visits?",
            "model":"Virtual_Visits",
            "name":"Virtual_Visits",
            "conditionExpression":"formData.Health_Plans == 'Yes'",
            "options":{
               "No":{
                  "label":"No"
               },
               "Yes":{
                  "label":"Yes"
               }
            }
         }
      ]
   },
   {
      "type":"accordion",
      "name":"Health Plan1: How the Plan Works",

      "conditionExpression":" formData.Total_Plan_Quantity > 0 && formData.Health_Plans == 'Yes'",
      "components":[
         {
            "type":"text",
            "label":"Custom Plan Name",
            "model":"Plan_1_Custom_Name",
            "name":"Plan_1_Custom_Name"
         },
         {
            "type":"select",
            "label":"Plan",
            "model":"Plan_1_Name",
            "name":"Plan_1_Name",
            "empty":"Please select",
            "conditionExpression":"formData.Health_Plans == 'Yes'",
            "options":{
               "Choice":{
                  "label":"Choice"
               },
               "Choice Plus":{
                  "label":"Choice Plus"
               }
            }
         },
         {
            "type":"select",
            "label":"Financial account?",
            "model":"Plan_1_Type",
            "name":"Plan_1_Type",
            "empty":"Please select",
            "options":{
               "Traditional":{
                  "label":"Traditional"
               },
               "with HSA":{
                  "label":"with HSA"
               }
            }
         },
         {
            "type":"text",
            "label":"EE",
            "model":"Plan_1_HSA_EmployerContribution_EE",
            "name":"Plan_1_HSA_EmployerContribution_EE",
            "conditionExpression":"formData.Plan_1_Type == 'with HSA'"
         },
         {
            "type":"text",
            "label":"EE + 1",
            "model":"Plan_1_HSA_EmployerContribution_EEPlusOne",
            "name":"Plan_1_HSA_EmployerContribution_EEPlusOne",
            "conditionExpression":"formData.Plan_1_Type == 'with HSA'"
         },
         {
            "type":"text",
            "label":"EE + Children",
            "model":"Plan_1_HSA_EmployerContribution_EEPlusChild",
            "name":"Plan_1_HSA_EmployerContribution_EEPlusChild",
            "conditionExpression":"formData.Plan_1_Type == 'with HSA'"
         },
         {
            "type":"text",
            "label":"Family",
            "model":"Plan_1_HSA_EmployerContribution_Family",
            "name":"Plan_1_HSA_EmployerContribution_Family",
            "conditionExpression":"formData.Plan_1_Type == 'with HSA'"
         },
         {
            "type":"select",
            "label":"Cost Share",
            "model":"Plan_1_HSA_Plan_Type",
            "name":"Plan_1_HSA_Plan_Type",
            "conditionExpression":"formData.Plan_1_Type == 'with HSA'",
            "options":{
               "Coinsurance after Deductible":{
                  "label":"Coinsurance after Deductible"
               },
               "Copayment after Deductible":{
                  "label":"Copayment after Deductible"
               }
            }
         },
         {
            "type":"text",
            "label":"Plan Pays %",
            "model":"Plan_1_HSA_PlanPays_Amount",
            "name":"Plan_1_HSA_PlanPays_Amount",
            "conditionExpression":"formData.Plan_1_Type == 'with HSA' && formData.Plan_1_HSA_Plan_Type != 'Copayment after Deductible'"
         },
         {
            "type":"text",
            "label":"You Pay %",
            "model":"Plan_1_HSA_YouPay_Amount",
            "name":"Plan_1_HSA_YouPay_Amount",
            "conditionExpression":"formData.Plan_1_Type == 'with HSA'"
         },
         {
            "type":"select",
            "label":"Year for IRS Guidelines",
            "model":"Plan_1_HSA_PlanYear",
            "name":"Plan_1_HSA_PlanYear",
            "conditionExpression":"formData.Plan_1_Type == 'with HSA'",
            "options":{
               "2018":{
                  "label":"2018"
               }
            }
         },
         {
            "type":"select",
            "label":"Offer Optum Bank?",
            "model":"Plan_1_HSA_OptumBank",
            "name":"Plan_1_HSA_OptumBank",
            "conditionExpression":"formData.Plan_1_Type == 'with HSA'",
            "options":{
               "No":{
                  "label":"No"
               },
               "Yes":{
                  "label":"Yes"
               }
            }
         }
      ]
   },
   {
      "type":"accordion",
      "name":"Health Plan2: How the Plan Works",

      "conditionExpression":" formData.Total_Plan_Quantity > 1 && formData.Health_Plans == 'Yes'",
      "components":[
         {
            "type":"text",
            "label":"Custom Plan Name",
            "model":"Plan_2_Custom_Name",
            "name":"Plan_2_Custom_Name"
         },
         {
            "type":"select",
            "label":"Plan",
            "model":"Plan_2_Name",
            "name":"Plan_2_Name",
            "empty":"Please select",
            "conditionExpression":"formData.Health_Plans == 'Yes'",
            "options":{
               "Choice":{
                  "label":"Choice"
               },
               "Choice Plus":{
                  "label":"Choice Plus"
               }
            }
         },
         {
            "type":"select",
            "label":"Financial account?",
            "model":"Plan_2_Type",
            "name":"Plan_2_Type",
            "empty":"Please select",
            "options":{
               "Traditional":{
                  "label":"Traditional"
               },
               "with HSA":{
                  "label":"with HSA"
               }
            }
         },
         {
            "type":"text",
            "label":"EE",
            "model":"Plan_2_HSA_EmployerContribution_EE",
            "name":"Plan_2_HSA_EmployerContribution_EE",
            "conditionExpression":"formData.Plan_2_Type == 'with HSA'"
         },
         {
            "type":"text",
            "label":"EE + 1",
            "model":"Plan_2_HSA_EmployerContribution_EEPlusOne",
            "name":"Plan_2_HSA_EmployerContribution_EEPlusOne",
            "conditionExpression":"formData.Plan_2_Type == 'with HSA'"
         },
         {
            "type":"text",
            "label":"EE + Children",
            "model":"Plan_2_HSA_EmployerContribution_EEPlusChild",
            "name":"Plan_2_HSA_EmployerContribution_EEPlusChild",
            "conditionExpression":"formData.Plan_2_Type == 'with HSA'"
         },
         {
            "type":"text",
            "label":"Family",
            "model":"Plan_2_HSA_EmployerContribution_Family",
            "name":"Plan_2_HSA_EmployerContribution_Family",
            "conditionExpression":"formData.Plan_2_Type == 'with HSA'"
         },
         {
            "type":"select",
            "label":"Cost Share",
            "model":"Plan_2_HSA_Plan_Type",
            "name":"Plan_2_HSA_Plan_Type",
            "conditionExpression":"formData.Plan_2_Type == 'with HSA'",
            "options":{
               "Coinsurance after Deductible":{
                  "label":"Coinsurance after Deductible"
               },
               "Copayment after Deductible":{
                  "label":"Copayment after Deductible"
               }
            }
         },
         {
            "type":"text",
            "label":"Plan Pays %",
            "model":"Plan_2_HSA_PlanPays_Amount",
            "name":"Plan_2_HSA_PlanPays_Amount",
            "conditionExpression":"formData.Plan_2_Type == 'with HSA' && formData.Plan_2_HSA_Plan_Type != 'Copayment after Deductible'"
         },
         {
            "type":"text",
            "label":"You Pay %",
            "model":"Plan_2_HSA_YouPay_Amount",
            "name":"Plan_2_HSA_YouPay_Amount",
            "conditionExpression":"formData.Plan_2_Type == 'with HSA'"
         },
         {
            "type":"select",
            "label":"Year for IRS Guidelines",
            "model":"Plan_2_HSA_PlanYear",
            "name":"Plan_2_HSA_PlanYear",
            "conditionExpression":"formData.Plan_2_Type == 'with HSA'",
            "options":{
               "2018":{
                  "label":"2018"
               }
            }
         },
         {
            "type":"select",
            "label":"Offer Optum Bank?",
            "model":"Plan_2_HSA_OptumBank",
            "name":"Plan_2_HSA_OptumBank",
            "conditionExpression":"formData.Plan_2_Type == 'with HSA'",
            "options":{
               "No":{
                  "label":"No"
               },
               "Yes":{
                  "label":"Yes"
               }
            }
         }
      ]
   },
   {
      "type":"accordion",
      "name":"Health Plan3: How the Plan Works",

      "conditionExpression":" formData.Total_Plan_Quantity > 2 && formData.Health_Plans == 'Yes'",
      "components":[
         {
            "type":"text",
            "label":"Custom Plan Name",
            "model":"Plan_3_Custom_Name",
            "name":"Plan_3_Custom_Name"
         },
         {
            "type":"select",
            "label":"Plan",
            "model":"Plan_3_Name",
            "name":"Plan_3_Name",
            "empty":"Please select",
            "conditionExpression":"formData.Health_Plans == 'Yes'",
            "options":{
               "Choice":{
                  "label":"Choice"
               },
               "Choice Plus":{
                  "label":"Choice Plus"
               }
            }
         },
         {
            "type":"select",
            "label":"Financial account?",
            "model":"Plan_3_Type",
            "name":"Plan_3_Type",
            "empty":"Please select",
            "options":{
               "Traditional":{
                  "label":"Traditional"
               },
               "with HSA":{
                  "label":"with HSA"
               }
            }
         },
         {
            "type":"text",
            "label":"EE",
            "model":"Plan_3_HSA_EmployerContribution_EE",
            "name":"Plan_3_HSA_EmployerContribution_EE",
            "conditionExpression":"formData.Plan_3_Type == 'with HSA'"
         },
         {
            "type":"text",
            "label":"EE + 1",
            "model":"Plan_3_HSA_EmployerContribution_EEPlusOne",
            "name":"Plan_3_HSA_EmployerContribution_EEPlusOne",
            "conditionExpression":"formData.Plan_3_Type == 'with HSA'"
         },
         {
            "type":"text",
            "label":"EE + Children",
            "model":"Plan_3_HSA_EmployerContribution_EEPlusChild",
            "name":"Plan_3_HSA_EmployerContribution_EEPlusChild",
            "conditionExpression":"formData.Plan_3_Type == 'with HSA'"
         },
         {
            "type":"text",
            "label":"Family",
            "model":"Plan_3_HSA_EmployerContribution_Family",
            "name":"Plan_3_HSA_EmployerContribution_Family",
            "conditionExpression":"formData.Plan_3_Type == 'with HSA'"
         },
         {
            "type":"select",
            "label":"Cost Share",
            "model":"Plan_3_HSA_Plan_Type",
            "name":"Plan_3_HSA_Plan_Type",
            "conditionExpression":"formData.Plan_3_Type == 'with HSA'",
            "options":{
               "Coinsurance after Deductible":{
                  "label":"Coinsurance after Deductible"
               },
               "Copayment after Deductible":{
                  "label":"Copayment after Deductible"
               }
            }
         },
         {
            "type":"text",
            "label":"Plan Pays %",
            "model":"Plan_3_HSA_PlanPays_Amount",
            "name":"Plan_3_HSA_PlanPays_Amount",
            "conditionExpression":"formData.Plan_3_Type == 'with HSA' && formData.Plan_3_HSA_Plan_Type != 'Copayment after Deductible'"
         },
         {
            "type":"text",
            "label":"You Pay %",
            "model":"Plan_3_HSA_YouPay_Amount",
            "name":"Plan_3_HSA_YouPay_Amount",
            "conditionExpression":"formData.Plan_3_Type == 'with HSA'"
         },
         {
            "type":"select",
            "label":"Year for IRS Guidelines",
            "model":"Plan_3_HSA_PlanYear",
            "name":"Plan_3_HSA_PlanYear",
            "conditionExpression":"formData.Plan_3_Type == 'with HSA'",
            "options":{
               "2018":{
                  "label":"2018"
               }
            }
         },
         {
            "type":"select",
            "label":"Offer Optum Bank?",
            "model":"Plan_3_HSA_OptumBank",
            "name":"Plan_3_HSA_OptumBank",
            "conditionExpression":"formData.Plan_3_Type == 'with HSA'",
            "options":{
               "No":{
                  "label":"No"
               },
               "Yes":{
                  "label":"Yes"
               }
            }
         }
      ]
   },
   {
      "type":"accordion",
      "name":"Health Plan4: How the Plan Works",

      "conditionExpression":" formData.Total_Plan_Quantity > 3 && formData.Health_Plans == 'Yes' ",
      "components":[
         {
            "type":"text",
            "label":"Custom Plan Name",
            "model":"Plan_4_Custom_Name",
            "name":"Plan_4_Custom_Name"
         },
         {
            "type":"select",
            "label":"Plan",
            "model":"Plan_4_Name",
            "name":"Plan_4_Name",
            "empty":"Please select",
            "conditionExpression":"formData.Health_Plans == 'Yes'",
            "options":{
               "Choice":{
                  "label":"Choice"
               },
               "Choice Plus":{
                  "label":"Choice Plus"
               }
            }
         },
         {
            "type":"select",
            "label":"Financial account?",
            "model":"Plan_4_Type",
            "name":"Plan_4_Type",
            "empty":"Please select",
            "options":{
               "Traditional":{
                  "label":"Traditional"
               },
               "with HSA":{
                  "label":"with HSA"
               }
            }
         },
         {
            "type":"text",
            "label":"EE",
            "model":"Plan_4_HSA_EmployerContribution_EE",
            "name":"Plan_4_HSA_EmployerContribution_EE",
            "conditionExpression":"formData.Plan_4_Type == 'with HSA'"
         },
         {
            "type":"text",
            "label":"EE + 1",
            "model":"Plan_4_HSA_EmployerContribution_EEPlusOne",
            "name":"Plan_4_HSA_EmployerContribution_EEPlusOne",
            "conditionExpression":"formData.Plan_4_Type == 'with HSA'"
         },
         {
            "type":"text",
            "label":"EE + Children",
            "model":"Plan_4_HSA_EmployerContribution_EEPlusChild",
            "name":"Plan_4_HSA_EmployerContribution_EEPlusChild",
            "conditionExpression":"formData.Plan_4_Type == 'with HSA'"
         },
         {
            "type":"text",
            "label":"Family",
            "model":"Plan_4_HSA_EmployerContribution_Family",
            "name":"Plan_4_HSA_EmployerContribution_Family",
            "conditionExpression":"formData.Plan_4_Type == 'with HSA'"
         },
         {
            "type":"select",
            "label":"Cost Share",
            "model":"Plan_4_HSA_Plan_Type",
            "name":"Plan_4_HSA_Plan_Type",
            "conditionExpression":"formData.Plan_4_Type == 'with HSA'",
            "options":{
               "Coinsurance after Deductible":{
                  "label":"Coinsurance after Deductible"
               },
               "Copayment after Deductible":{
                  "label":"Copayment after Deductible"
               }
            }
         },
         {
            "type":"text",
            "label":"Plan Pays %",
            "model":"Plan_4_HSA_PlanPays_Amount",
            "name":"Plan_4_HSA_PlanPays_Amount",
            "conditionExpression":"formData.Plan_4_Type == 'with HSA' && formData.Plan_4_HSA_Plan_Type != 'Copayment after Deductible'"
         },
         {
            "type":"text",
            "label":"You Pay %",
            "model":"Plan_4_HSA_YouPay_Amount",
            "name":"Plan_4_HSA_YouPay_Amount",
            "conditionExpression":"formData.Plan_4_Type == 'with HSA'"
         },
         {
            "type":"select",
            "label":"Year for IRS Guidelines",
            "model":"Plan_4_HSA_PlanYear",
            "name":"Plan_4_HSA_PlanYear",
            "conditionExpression":"formData.Plan_4_Type == 'with HSA'",
            "options":{
               "2018":{
                  "label":"2018"
               }
            }
         },
         {
            "type":"select",
            "label":"Offer Optum Bank?",
            "model":"Plan_4_HSA_OptumBank",
            "name":"Plan_4_HSA_OptumBank",
            "conditionExpression":"formData.Plan_4_Type == 'with HSA'",
            "options":{
               "No":{
                  "label":"No"
               },
               "Yes":{
                  "label":"Yes"
               }
            }
         }
      ]
   },
   {
      "type":"accordion",
      "name":"Health Plan5: How the Plan Works",

      "conditionExpression":" formData.Total_Plan_Quantity > 4 && formData.Health_Plans == 'Yes' ",
      "components":[
         {
            "type":"text",
            "label":"Custom Plan Name",
            "model":"Plan_5_Custom_Name",
            "name":"Plan_5_Custom_Name"
         },
         {
            "type":"select",
            "label":"Plan",
            "model":"Plan_5_Name",
            "name":"Plan_5_Name",
            "empty":"Please select",
            "conditionExpression":"formData.Health_Plans == 'Yes' ",
            "options":{
               "Choice":{
                  "label":"Choice"
               },
               "Choice Plus":{
                  "label":"Choice Plus"
               }
            }
         },
         {
            "type":"select",
            "label":"Financial account?",
            "model":"Plan_5_Type",
            "name":"Plan_5_Type",
            "empty":"Please select",
            "options":{
               "Traditional":{
                  "label":"Traditional"
               },
               "with HSA":{
                  "label":"with HSA"
               }
            }
         },
         {
            "type":"text",
            "label":"EE",
            "model":"Plan_5_HSA_EmployerContribution_EE",
            "name":"Plan_5_HSA_EmployerContribution_EE",
            "conditionExpression":"formData.Plan_5_Type == 'with HSA'"
         },
         {
            "type":"text",
            "label":"EE + 1",
            "model":"Plan_5_HSA_EmployerContribution_EEPlusOne",
            "name":"Plan_5_HSA_EmployerContribution_EEPlusOne",
            "conditionExpression":"formData.Plan_5_Type == 'with HSA'"
         },
         {
            "type":"text",
            "label":"EE + Children",
            "model":"Plan_5_HSA_EmployerContribution_EEPlusChild",
            "name":"Plan_5_HSA_EmployerContribution_EEPlusChild",
            "conditionExpression":"formData.Plan_5_Type == 'with HSA'"
         },
         {
            "type":"text",
            "label":"Family",
            "model":"Plan_5_HSA_EmployerContribution_Family",
            "name":"Plan_5_HSA_EmployerContribution_Family",
            "conditionExpression":"formData.Plan_5_Type == 'with HSA'"
         },
         {
            "type":"select",
            "label":"Cost Share",
            "model":"Plan_5_HSA_Plan_Type",
            "name":"Plan_5_HSA_Plan_Type",
            "conditionExpression":"formData.Plan_5_Type == 'with HSA'",
            "options":{
               "Coinsurance after Deductible":{
                  "label":"Coinsurance after Deductible"
               },
               "Copayment after Deductible":{
                  "label":"Copayment after Deductible"
               }
            }
         },
         {
            "type":"text",
            "label":"Plan Pays %",
            "model":"Plan_5_HSA_PlanPays_Amount",
            "name":"Plan_5_HSA_PlanPays_Amount",
            "conditionExpression":"formData.Plan_5_Type == 'with HSA' && formData.Plan_5_HSA_Plan_Type != 'Copayment after Deductible'"
         },
         {
            "type":"text",
            "label":"You Pay %",
            "model":"Plan_5_HSA_YouPay_Amount",
            "name":"Plan_5_HSA_YouPay_Amount",
            "conditionExpression":"formData.Plan_5_Type == 'with HSA'"
         },
         {
            "type":"select",
            "label":"Year for IRS Guidelines",
            "model":"Plan_5_HSA_PlanYear",
            "name":"Plan_5_HSA_PlanYear",
            "conditionExpression":"formData.Plan_5_Type == 'with HSA'",
            "options":{
               "2018":{
                  "label":"2018"
               }
            }
         },
         {
            "type":"select",
            "label":"Offer Optum Bank?",
            "model":"Plan_5_HSA_OptumBank",
            "name":"Plan_5_HSA_OptumBank",
            "conditionExpression":"formData.Plan_5_Type == 'with HSA'",
            "options":{
               "No":{
                  "label":"No"
               },
               "Yes":{
                  "label":"Yes"
               }
            }
         }
      ]
   },
   {
      "type":"accordion",
      "name":"Health Plan6: How the Plan Works",

      "conditionExpression":" formData.Total_Plan_Quantity > 5 && formData.Health_Plans == 'Yes'",
      "components":[
         {
            "type":"text",
            "label":"Custom Plan Name",
            "model":"Plan_6_Custom_Name",
            "name":"Plan_6_Custom_Name"
         },
         {
            "type":"select",
            "label":"Plan",
            "model":"Plan_6_Name",
            "name":"Plan_6_Name",
            "empty":"Please select",
            "conditionExpression":"formData.Health_Plans == 'Yes'",
            "options":{
               "Choice":{
                  "label":"Choice"
               },
               "Choice Plus":{
                  "label":"Choice Plus"
               }
            }
         },
         {
            "type":"select",
            "label":"Financial account?",
            "model":"Plan_6_Type",
            "name":"Plan_6_Type",
            "empty":"Please select",
            "options":{
               "Traditional":{
                  "label":"Traditional"
               },
               "with HSA":{
                  "label":"with HSA"
               }
            }
         },
         {
            "type":"text",
            "label":"EE",
            "model":"Plan_6_HSA_EmployerContribution_EE",
            "name":"Plan_6_HSA_EmployerContribution_EE",
            "conditionExpression":"formData.Plan_6_Type == 'with HSA'"
         },
         {
            "type":"text",
            "label":"EE + 1",
            "model":"Plan_6_HSA_EmployerContribution_EEPlusOne",
            "name":"Plan_6_HSA_EmployerContribution_EEPlusOne",
            "conditionExpression":"formData.Plan_6_Type == 'with HSA'"
         },
         {
            "type":"text",
            "label":"EE + Children",
            "model":"Plan_6_HSA_EmployerContribution_EEPlusChild",
            "name":"Plan_6_HSA_EmployerContribution_EEPlusChild",
            "conditionExpression":"formData.Plan_6_Type == 'with HSA'"
         },
         {
            "type":"text",
            "label":"Family",
            "model":"Plan_6_HSA_EmployerContribution_Family",
            "name":"Plan_6_HSA_EmployerContribution_Family",
            "conditionExpression":"formData.Plan_6_Type == 'with HSA'"
         },
         {
            "type":"select",
            "label":"Cost Share",
            "model":"Plan_6_HSA_Plan_Type",
            "name":"Plan_6_HSA_Plan_Type",
            "conditionExpression":"formData.Plan_6_Type == 'with HSA'",
            "options":{
               "Coinsurance after Deductible":{
                  "label":"Coinsurance after Deductible"
               },
               "Copayment after Deductible":{
                  "label":"Copayment after Deductible"
               }
            }
         },
         {
            "type":"text",
            "label":"Plan Pays %",
            "model":"Plan_6_HSA_PlanPays_Amount",
            "name":"Plan_6_HSA_PlanPays_Amount",
            "conditionExpression":"formData.Plan_6_Type == 'with HSA' && formData.Plan_6_HSA_Plan_Type != 'Copayment after Deductible'"
         },
         {
            "type":"text",
            "label":"You Pay %",
            "model":"Plan_6_HSA_YouPay_Amount",
            "name":"Plan_6_HSA_YouPay_Amount",
            "conditionExpression":"formData.Plan_6_Type == 'with HSA'"
         },
         {
            "type":"select",
            "label":"Year for IRS Guidelines",
            "model":"Plan_6_HSA_PlanYear",
            "name":"Plan_6_HSA_PlanYear",
            "conditionExpression":"formData.Plan_6_Type == 'with HSA'",
            "options":{
               "2018":{
                  "label":"2018"
               }
            }
         },
         {
            "type":"select",
            "label":"Offer Optum Bank?",
            "model":"Plan_6_HSA_OptumBank",
            "name":"Plan_6_HSA_OptumBank",
            "conditionExpression":"formData.Plan_6_Type == 'with HSA'",
            "options":{
               "No":{
                  "label":"No"
               },
               "Yes":{
                  "label":"Yes"
               }
            }
         }
      ]
   },
   {
      "type":"accordion",
      "name":"Health Plan7: How the Plan Works",

      "conditionExpression":" formData.Total_Plan_Quantity > 6 && formData.Health_Plans == 'Yes'",
      "components":[
         {
            "type":"text",
            "label":"Custom Plan Name",
            "model":"Plan_7_Custom_Name",
            "name":"Plan_7_Custom_Name"
         },
         {
            "type":"select",
            "label":"Plan",
            "model":"Plan_7_Name",
            "name":"Plan_7_Name",
            "empty":"Please select",
            "conditionExpression":"formData.Health_Plans == 'Yes'",
            "options":{
               "Choice":{
                  "label":"Choice"
               },
               "Choice Plus":{
                  "label":"Choice Plus"
               }
            }
         },
         {
            "type":"select",
            "label":"Financial account?",
            "model":"Plan_7_Type",
            "name":"Plan_7_Type",
            "options":{
               "Traditional":{
                  "label":"Traditional"
               },
               "with HSA":{
                  "label":"with HSA"
               }
            }
         },
         {
            "type":"text",
            "label":"EE",
            "model":"Plan_7_HSA_EmployerContribution_EE",
            "name":"Plan_7_HSA_EmployerContribution_EE",
            "conditionExpression":"formData.Plan_7_Type == 'with HSA'"
         },
         {
            "type":"text",
            "label":"EE + 1",
            "model":"Plan_7_HSA_EmployerContribution_EEPlusOne",
            "name":"Plan_7_HSA_EmployerContribution_EEPlusOne",
            "conditionExpression":"formData.Plan_7_Type == 'with HSA'"
         },
         {
            "type":"text",
            "label":"EE + Children",
            "model":"Plan_7_HSA_EmployerContribution_EEPlusChild",
            "name":"Plan_7_HSA_EmployerContribution_EEPlusChild",
            "conditionExpression":"formData.Plan_7_Type == 'with HSA'"
         },
         {
            "type":"text",
            "label":"Family",
            "model":"Plan_7_HSA_EmployerContribution_Family",
            "name":"Plan_7_HSA_EmployerContribution_Family",
            "conditionExpression":"formData.Plan_7_Type == 'with HSA'"
         },
         {
            "type":"select",
            "label":"Cost Share",
            "model":"Plan_7_HSA_Plan_Type",
            "name":"Plan_7_HSA_Plan_Type",
            "conditionExpression":"formData.Plan_7_Type == 'with HSA'",
            "options":{
               "Coinsurance after Deductible":{
                  "label":"Coinsurance after Deductible"
               },
               "Copayment after Deductible":{
                  "label":"Copayment after Deductible"
               }
            }
         },
         {
            "type":"text",
            "label":"Plan Pays %",
            "model":"Plan_7_HSA_PlanPays_Amount",
            "name":"Plan_7_HSA_PlanPays_Amount",
            "conditionExpression":"formData.Plan_7_Type == 'with HSA' && formData.Plan_7_HSA_Plan_Type != 'Copayment after Deductible'"
         },
         {
            "type":"text",
            "label":"You Pay %",
            "model":"Plan_7_HSA_YouPay_Amount",
            "name":"Plan_7_HSA_YouPay_Amount",
            "conditionExpression":"formData.Plan_7_Type == 'with HSA'"
         },
         {
            "type":"select",
            "label":"Year for IRS Guidelines",
            "model":"Plan_7_HSA_PlanYear",
            "name":"Plan_7_HSA_PlanYear",
            "conditionExpression":"formData.Plan_7_Type == 'with HSA'",
            "options":{
               "2018":{
                  "label":"2018"
               }
            }
         },
         {
            "type":"select",
            "label":"Offer Optum Bank?",
            "model":"Plan_7_HSA_OptumBank",
            "name":"Plan_7_HSA_OptumBank",
            "conditionExpression":"formData.Plan_7_Type == 'with HSA'",
            "options":{
               "No":{
                  "label":"No"
               },
               "Yes":{
                  "label":"Yes"
               }
            }
         }
      ]
   },
   {
      "type":"accordion",
      "name":"FSA",

      "conditionExpression":" formData.FSA == 'Yes'",
      "components":[
         {
            "type":"select",
            "label":"Health Care FSA",
            "model":"FSA_HealthCare",
            "name":"FSA_HealthCare",
            "options":{
               "No":{
                  "label":"No"
               },
               "Yes":{
                  "label":"Yes"
               }
            }
         },
         {
            "type":"select",
            "label":"Dependent Care FSA",
            "model":"FSA_DependentCare",
            "name":"FSA_DependentCare",
            "options":{
               "No":{
                  "label":"No"
               },
               "Yes":{
                  "label":"Yes"
               }
            }
         },
         {
            "type":"select",
            "label":"Limited Purpose FSA",
            "model":"FSA_LimitedPurpose",
            "name":"FSA_LimitedPurpose",
            "options":{
               "No":{
                  "label":"No"
               },
               "Yes":{
                  "label":"Yes"
               }
            }
         },
         {
            "type":"select",
            "label":"Spending Card?",
            "model":"FSA_SpendingCard",
            "name":"FSA_SpendingCard",
            "options":{
               "No":{
                  "label":"No"
               },
               "Yes":{
                  "label":"Yes"
               }
            }
         },
         {
            "type":"select",
            "label":"FSA Plan Year",
            "model":"FSA_Plan_Year",
            "name":"FSA_Plan_Year",
            "options":{
               "2018":{
                  "label":"2018"
               }
            }
         }
      ]
   },
   {
      "type":"accordion",
      "name":"Optional Pages to Include",
      "conditionExpression":"true",
      "components":[
         {
            "type":"select",
            "label":"Include Programs to Help You section?",
            "model":"Programs_To_Help_You",
            "name":"Programs_To_Help_You",
            "options":{
               "No":{
                  "label":"No"
               },
               "Yes":{
                  "label":"Yes"
               }
            }
         },
         {
            "type":"select",
            "label":"Include Preventive Care page?",
            "model":"Preventive_Care",
            "name":"Preventive_Care",
            "options":{
               "No":{
                  "label":"No"
               },
               "Yes":{
                  "label":"Yes"
               }
            }
         }
      ]
   },
   {
      "type":"accordion",
      "name":"Programs to Help You",

      "conditionExpression":"formData.Programs_To_Help_You == 'Yes'",
      "components":[
         {
            "type":"select",
            "label":"Include Health and Wellness Programs?",
            "model":"Health_And_Wellness_Modules",
            "name":"Health_And_Wellness_Modules",
            "options":{
               "No":{
                  "label":"No"
               },
               "Yes":{
                  "label":"Yes"
               }
            }
         },
         {
            "type":"select",
            "label":"Include Decision Support Programs?",
            "model":"Decision_Support_Modules",
            "name":"Decision_Support_Modules",
            "options":{
               "No":{
                  "label":"No"
               },
               "Yes":{
                  "label":"Yes"
               }
            }
         },
         {
            "type":"select",
            "label":"Include Women's Health Programs?",
            "model":"Womens_Health_Modules",
            "name":"Womens_Health_Modules",
            "options":{
               "No":{
                  "label":"No"
               },
               "Yes":{
                  "label":"Yes"
               }
            }
         },
         {
            "type":"select",
            "label":"Include Extra Support Programs?",
            "model":"Extra_Support_Modules",
            "name":"Extra_Support_Modules",
            "options":{
               "No":{
                  "label":"No"
               },
               "Yes":{
                  "label":"Yes"
               }
            }
         }
      ]
   }
];
$j(document).ready(function() {
    
 	var scope = angular.element(document.getElementById('buildTemplateID')).scope().initialize('tdForm');
});