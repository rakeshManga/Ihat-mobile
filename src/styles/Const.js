import { RFValue } from "react-native-responsive-fontsize";
import Config from 'react-native-config';
import { Platform, StatusBar } from "react-native";
import DeviceInfo from 'react-native-device-info';

export const FONT_BOLD = "Quicksand-Bold";
export const FONT_LIGHT = "Quicksand-Light";
export const FONT_MEDIUM = "Quicksand-Medium";
export const FONT_REGULAR = "Quicksand-Regular";
export const FONT_ROBOTO = "Roboto";

export const STANDARD_SCREEN_HEIGHT = 740;

export const EXTRA_SMALL_FONT_SIZE_2 = 9;
export const EXTRA_SMALL_FONT_SIZE_1 = 10;
export const EXTRA_SMALL_FONT_SIZE = 12;
export const SMALL_FONT_SIZE = 14;
export const NORMAL_FONT_SIZE = 16;
export const LARGE_FONT_SIZE = 18;
export const EXTRA_LARGE_FONT_SIZE = 20;
export const EXTRA_LARGE_FONT_SIZE_2 = 24;
export const EXTRA_LARGE_FONT_SIZE_3 = 26;

export const STATUSBAR_HEIGHT =
    Platform.OS === 'ios'
        ? 20
        : StatusBar.currentHeight;
export const APPBAR_HEIGHT = Platform.OS === 'ios' ? 30 : 56;
export const HEADER_BAR_HEIGHT = DeviceInfo.hasNotch() ? STATUSBAR_HEIGHT + APPBAR_HEIGHT : 0;

export const WHITE_COLOR = "white";
export const BLACK_COLOR = "black";
export const THEME_COLOR = Config.THEME_COLOR || "#619ADE";
export const UNDERLINE_COLOR = "#c3c3c3";
export const ICON_COLOR = "#c3c3c3";
export const GRAY_COLOR = "#d6d8d7";
export const ORANGE_COLOR = "#bb6a2e";
export const TEXT_GRAY = "#5c5e5c";
export const LIGHT_BLUE = "#DDECFF"
export const FONT_BLUE = "#144F79"
export const BUTTON_BLUE = "#4F85D7";
export const DARK_RED = "#A62C23";
export const DARK_GREEN = "#006400";
export const BLUE = "#478DF7";
export const LIGHT_RED = "#b61e4c";
export const WHITE_SHADE = "#FAF9F6";
export const ASH_COLOR = "#cbcccc";

export const nigphoneRegExp = '^[0]';
export const phoneRegExp = '^[6-9]{1}?[0-9]{9}$';
export const userNameRegExp = '^[a-z0-9@]+([._@][a-z0-9@]+)*$';//'^[a-z]{1}?[a-z0-9_.]*$';
export const coporateRegExp = '^[a-zA-Z0-9]*$';
export const couponeCodeRegExp = '^[a-zA-Z0-9]*$';
export const passwordRegExp = '^[a-zA-Z0-9]{1}?[a-zA-Z0-9_@]*$';
export const onlyWordsWithSpace = '^^[a-zA-Z]{1}?[a-zA-Z ]*$';
export const onlyWords = '^[a-zA-Z]{1}?[a-zA-Z]*$';
export const alphaNumbericRegExp = '^[a-zA-Z0-9]*$';
export const reasonRegExp = '^[a-zA-Z0-9_?., ]*$';
export const ReferenceCodeRegExp = '^[a-zA-Z0-9-]*$';
export const userNameValidation1 = "Username can only contain a-z,0-9, _ ,. and @";
export const userNameValidation2 = "Username cannot begin with _ or . and together";
export const userNameValidation3 = "Username can contain only 6 to 20 characters"
export const TOOLBAR_HEIGHT = RFValue(60, STANDARD_SCREEN_HEIGHT);


export const Symptoms = (intl) => {
    if (Config.ORG_NAME == ORG_NAME.AAROGYAM_PLUS) {
        return [
            {
                id: 1,
                label: "Abdominal Pain",//intl.abdominalPain,
                value: intl.abdominalPain,
                isChecked: false
            },
            {
                id: 2,
                label: "Anemia",//intl.anemia,
                value: intl.anemia,
                isChecked: false
            },
            {
                id: 3,
                label: "Backache",//intl.backache,
                value: intl.backache,
                isChecked: false
            },
            {
                id: 4,
                label: "Constipation",//intl.constipation,
                value: intl.constipation,
                isChecked: false
            },
            {
                id: 5,
                label: "COPD",//intl.COPD,
                value: intl.COPD,
                isChecked: false
            },
            {
                id: 6,
                label: "Cough/Cold",//intl.coughCold,
                value: intl.coughCold,
                isChecked: false
            },
            {
                id: 7,
                label: "Dental Problem",//intl.dentalProblem,
                value: intl.dentalProblem,
                isChecked: false
            },
            {
                id: 8,
                label: "Diarrhea",//intl.diarrhea,
                value: intl.diarrhea,
                isChecked: false
            },
            {
                id: 9,
                label: "ENT Infection",//intl.ENTInfection,
                value: intl.ENTInfection,
                isChecked: false
            },
            {
                id: 10,
                label: "Eye infection",//intl.EyeInfection,
                value: intl.EyeInfection,
                isChecked: false
            },
            {
                id: 11,
                label: "Fever",//intl.fever,
                value: intl.fever,
                isChecked: false
            },
            {
                id: 12,
                label: "Gastritis",//intl.gastritis,
                value: intl.gastritis,
                isChecked: false
            },
            {
                id: 13,
                label: "Gyanec/ Leucorhhea",//intl.gyanecLeucorhhea,
                value: intl.gyanecLeucorhhea,
                isChecked: false
            },
            {
                id: 14,
                label: "Headache",//intl.headache,
                value: intl.headache,
                isChecked: false
            },
            {
                id: 15,
                label: "Hypertension",//intl.hypertension,
                value: intl.hypertension,
                isChecked: false
            },
            {
                id: 16,
                label: "Injury",//intl.injury,
                value: intl.injury,
                isChecked: false
            },
            {
                id: 17,
                label: "Jaundice",//intl.jaundice,
                value: intl.jaundice,
                isChecked: false
            },
            {
                id: 18,
                label: "Joint Pain",//intl.jointPain,
                value: intl.jointPain,
                isChecked: false
            },
            {
                id: 19,
                label: "Tuberculosis",//intl.tuberculosis,
                value: intl.tuberculosis,
                isChecked: false
            },
            {
                id: 20,
                label: "Osteoarthritis",//intl.osteoarthritis,
                value: intl.osteoarthritis,
                isChecked: false
            },
            {
                id: 21,
                label: "Pain",//intl.pain,
                value: intl.pain,
                isChecked: false
            },
            {
                id: 22,
                label: "Piles",//intl.piles,
                value: intl.piles,
                isChecked: false
            },
            {
                id: 23,
                label: "Skin/Scabies/Fungal",//intl.skinScabiesFungal,
                value: intl.skinScabiesFungal,
                isChecked: false
            },
            {
                id: 24,
                label: "UTI",//intl.UTI,
                value: intl.UTI,
                isChecked: false
            },
            {
                id: 25,
                label: "Oral Ulcer",//intl.oralUlcer,
                value: intl.oralUlcer,
                isChecked: false
            },
            {
                id: 26,
                label: "Others",//intl.others,
                value: intl.others,
                isChecked: false,
                isOther: true
            },
        ]
    } else {
        return [
            {
                id: 1,
                label: "Fever",//intl.fever,
                value: intl.fever,
                isChecked: false
            },
            {
                id: 2,
                label: "Runny Nose",//intl.coughRunnyNose,
                value: intl.coughRunnyNose,
                isChecked: false
            },
            {
                id: 3,
                label: "Toothache",//intl.toothache,
                value: intl.toothache,
                isChecked: false
            },
            {
                id: 4,
                label: "Cough",//intl.cough,
                value: intl.cough,
                isChecked: false
            },
            {
                id: 5,
                label: "Headache",//intl.headache,
                value: intl.headache,
                isChecked: false
            },
            {
                id: 6,
                label: "Hairfall",//intl.hairfall,
                value: intl.hairfall,
                isChecked: false
            },
            {
                id: 8,
                label: "Diabetes",//intl.diabetes,
                value: intl.diabetes,
                isChecked: false
            },
            {
                id: 9,
                label: "Acidity",//intl.acidity,
                value: intl.acidity,
                isChecked: false
            },
            {
                id: 10,
                label: "Piles",//intl.piles,
                value: intl.piles,
                isChecked: false
            },
            {
                id: 11,
                label: "Stress",//intl.stress,
                value: intl.stress,
                isChecked: false
            },
            {
                id: 12,
                label: "Others",//intl.others,
                value: intl.others,
                isChecked: false,
                isOther: true
            },
        ]
    }


}


export const Languages = (intl) => {

    return [
        {
            id: 1,
            label: "English",
            value: "English",
            isChecked: false,
            code: "en"
        },
        {
            id: 2,
            label: "Hindi",
            value: "Hindi",
            isChecked: false,
            code: "hi"
        },
        {
            id: 3,
            label: "Telugu",
            value: "Telugu",
            isChecked: false,
            code: "te"
        },
        {
            id: 4,
            label: "Tamil",
            value: "Tamil",
            isChecked: false,
            code: "ta"
        },
    ]



}


//just for development
export const SubscriptionData = () => {
    return {
      status: 'success',
      response: {
        PatientDetails: [
          {
            name: 'zoom D ',
            payment_configid: 18,
            dependdent_parent: 0,
            mobile_number: '9110570732',
            patinetid: 20,
            is_dependdent: false,
            gender: 'Male',
            payment_done: true,
            dependdent_patient_id: 0,
            payment_type: 'primary',
            relation: 'self',
            video_call_end_date: '2021-01-14',
            payment_per_head: 120.0,
          },
          {
            payment_configid: 18,
            patinetid: 20,
            dependdent_patient_id: 7,
            gender: 'Male',
            payment_done: true,
            payment_type: 'dependent',
            dependdent_parent: 20,
            is_dependdent: true,
            video_call_end_date: '2021-01-14',
            name: 'geetha',
            relation: 'Son',
            mobile_number: '9496484004',
            payment_per_head: 120.0,
          },
          {
            payment_configid: 18,
            patinetid: 20,
            dependdent_patient_id: 8,
            name: 'Akshay',
            gender: 'Male',
            payment_type: 'dependent',
            video_call_end_date: null,
            dependdent_parent: 20,
            is_dependdent: true,
            payment_done: false,
            relation: 'Brother',
            mobile_number: '8497657846',
            payment_per_head: 120.0,
          },
          {
            patinetid: 82,
            payment_configid: 18,
            dependdent_parent: 0,
            is_dependdent: false,
            gender: 'Male',
            payment_done: true,
            dependdent_patient_id: 0,
            mobile_number: '9079186095',
            payment_type: 'primary',
            relation: 'self',
            video_call_end_date: '2020-10-12',
            name: 'Vishnu  kumar',
            payment_per_head: 120.0,
          },
          {
            patinetid: 83,
            payment_configid: 18,
            dependdent_parent: 0,
            is_dependdent: false,
            mobile_number: '7014314710',
            gender: 'Male',
            name: 'manish sharma',
            video_call_end_date: null,
            dependdent_patient_id: 0,
            payment_type: 'primary',
            relation: 'self',
            payment_done: false,
            payment_per_head: 120.0,
          },
          {
            payment_configid: 18,
            mobile_number: '8106894677',
            dependdent_parent: 0,
            is_dependdent: false,
            gender: 'Male',
            name: 'sai hari babu',
            video_call_end_date: null,
            dependdent_patient_id: 0,
            payment_type: 'primary',
            relation: 'self',
            payment_done: false,
            patinetid: 107,
            payment_per_head: 120.0,
          },
          {
            payment_configid: 18,
            dependdent_parent: 0,
            name: 'Narendra Nagar Thaniwal',
            is_dependdent: false,
            gender: 'Male',
            video_call_end_date: null,
            dependdent_patient_id: 0,
            mobile_number: '7568193999',
            payment_type: 'primary',
            relation: 'self',
            payment_done: false,
            patinetid: 108,
            payment_per_head: 120.0,
          },
          {
            payment_configid: 18,
            dependdent_parent: 0,
            is_dependdent: false,
            mobile_number: '9462019619',
            gender: 'Male',
            video_call_end_date: null,
            dependdent_patient_id: 0,
            name: 'mahesh patidar',
            payment_type: 'primary',
            relation: 'self',
            payment_done: false,
            patinetid: 142,
            payment_per_head: 120.0,
          },
          {
            payment_configid: 18,
            dependdent_parent: 0,
            patinetid: 148,
            is_dependdent: false,
            gender: 'Male',
            video_call_end_date: null,
            dependdent_patient_id: 0,
            name: 'Ankit Kumar  meghwal',
            mobile_number: '9549743045',
            payment_type: 'primary',
            relation: 'self',
            payment_done: false,
            payment_per_head: 120.0,
          },
          {
            payment_configid: 18,
            dependdent_parent: 0,
            name: 'Raghu singh Prihar Prihar',
            is_dependdent: false,
            patinetid: 159,
            gender: 'Male',
            mobile_number: '8955561633',
            video_call_end_date: null,
            dependdent_patient_id: 0,
            payment_type: 'primary',
            relation: 'self',
            payment_done: false,
            payment_per_head: 120.0,
          },
          {
            payment_configid: 18,
            dependdent_parent: 0,
            patinetid: 315,
            is_dependdent: false,
            video_call_end_date: null,
            dependdent_patient_id: 0,
            payment_type: 'primary',
            relation: 'self',
            payment_done: false,
            name: 'Priyanka  Arora',
            mobile_number: '8306706010',
            gender: 'Female',
            payment_per_head: 120.0,
          },
          {
            payment_configid: 18,
            mobile_number: '9929781031',
            dependdent_parent: 0,
            patinetid: 341,
            is_dependdent: false,
            gender: 'Male',
            video_call_end_date: null,
            dependdent_patient_id: 0,
            name: 'davarkilal nagar',
            payment_type: 'primary',
            relation: 'self',
            payment_done: false,
            payment_per_head: 120.0,
          },
        ],
        PatientAmountDetails: {
          received_amount: 560.0,
          still_no_of_people: 9,
          received_no_of_people: 2,
          still_need_to_receive: 0.0,
        },
      },
      httpStatus: 'ACCEPTED',
      message: 'Records Found',
    };
  };

  
  export const LabReportData = () => {
    return {
      status: 'success',
      response: {
        PatientDetails: [
          {
            sNo:1,
            date: '01-08-2021',
            totalPeople: 3,
            collectionAmount: 120,
            view: "View"
          },
  
          {
            sNo:2,
            date: '05-08-2021',
            totalPeople: 4,
            collectionAmount: 120,
            view: "View"
          },
          {
            sNo:3,
            date: '06-08-2021',
            totalPeople: 3,
            collectionAmount: 120,
            view: "View"
          },
          {
            sNo:4,
            date: '08-08-2021',
            totalPeople: 3,
            collectionAmount: 120,
            view: "View"
          },
        ],
        PatientAmountDetails: {
          received_amount: 560.0,
          still_no_of_people: 9,
          received_no_of_people: 2,
          still_need_to_receive: 0.0,
        },
      },
      httpStatus: 'ACCEPTED',
      message: 'Records Found',
    };
  };
  
  

// export const create = (relations = []) => {
//     const relationsData = relations.map((relation) => {
//         return {
//             ...relation,
//             label: relation.relation,
//             value: relation.relation,
//         }
//     });
//     return relationsData;
// }

export const FILE_UPLOAD_TYPE = {
    MEMBER_DOCUMENTS: "MEMBERDOCUMENTS",
    MEMBER_GAURDIAN: "GAURDIAN"
};

export const PAYMENT_TYPE = {
    LAB: "LAB",
    PHARMACY: "PHARMACY",
    CONSULTATION: "CONSULTATION",
    SUBSCRIPTION: "SUBSCRIPTION",
    WALLET: "WALLET",
    SERVICES:"Services",
    SPECIAL_CONSULTATION : "SPECIAL_CONSULTATION"
  
}

export const PAYMENT_PROVIDER = {
    MPESA: "MPesa",
    PAYUBIZ: "PayUBiz",
    PAY_STACK: "PayStack"
}
export const PAYMENT_MODE = {
    WL: 'wl',
    CC: 'cc',
    DC: 'dc',
    UPI: "upi",
  };
  
export const ORG_NAME = {
    GENOME: "Genome",
    ANH: "Doctor ANH",
    VIDMED: "VMed",
    VIDMED2: "VMed 2.0",
    SAGE: 'Sage',
    INCIPE: 'Incipe',
    UP_VIDMED: 'UP Dhanush Vidmed',
    SWSHODHAN_VIDMED: "SWASHODHAN",
    ESIC: "ESIC VMed",
    KAMPE: "Kampe Teleclinic",
    SAMARITAN: "Samaritan Teleclinic",
    ECLINIC: "eCLINIC234",
    AAROGYAM_PLUS: "Aarogyam Plus",
    NANDGHAR: "Nand Ghar",
    GERMANIUM: "Germanium Vidmed",
    CCAD: "CCAD-VMed",
    GCC: "GCC Vidmed",
    ABHAYA: "Abhaya Sahaya",
    HCS: "HCS",
    SALEM: "Salem Corporation VMed",
    UFERWAS: "I-Vaccinate",
    COIMBATORE: "CBE CORP VMed",
    JANAHITHA: "Janahitha VMed",
    UTTARAKHANDTM: "UTTARAKHANDTM",
    AXA: 'AxA',
    VMEDCORP: 'VMed Corp',
  GAM_VMed: 'GAM VMed',
  PSYPAY_GAM: 'Jan Sevak Kendra',
  TSS_GAM: 'TSS GAM',
  GYF:'GY Foundation AM',
  UK_TELEMEDICINE_PRO:"UK Telemedicine Pro"
};

export const COMP_NAME={
    AYUSH:"AYUSH",
    BLOOD_BANK:"BLOOD_BANK",
    COMMON_MODULE:"COMMON_MODULE",
    GAM:"GAM",
    HUB_SPOKE:"HUB_&_SPOKE",
    INSURANCE_MODEL:"INSURANCE_MODEL",
    NCD:"NCD",
    RAKTHADAAN:"RAKTHADAAN",
    VMED_2:"VMED_2.0"
};

export const ECLINIC_VIDMED = "eClinic-VMed";

export const MISSED_CALL_TYPE = {
    //'Doctor Declined','Patient Declined','Doctor Unanswered'
    DOCTOR_DECLINED: 'Doctor Declined',
    PATIENT_DECLINED: 'Patient Declined',
    DOCTOR_UNANSWERED: 'Doctor Unanswered',
    DOCTOR_BUSY: 'Doctor Busy'
}
export const SUBSCRIPTION_PLAN = {
    EXPIRED: 'Expired',
    ONGOING: 'ONGOING',
    NOT_STARTED: 'NOT_STARTED',
    NO_PLAN: "NO_PLAN",
    ONLY_MBBS: "ONLY_MBBS"
  };
  
  
export const API_TIME_OUT = 30000;
export const NOTIFICATION_MSG = "We are facing some problem when sending SMS and Email notification to your device. Please Try Again";
export const  TermsAndConditionsMsg = " \n \n I, hereby declare that I am voluntarily sharing my Aadhaar Number / Virtual ID and demographic information issued by UIDAI, with National Health Authority (NHA) for the sole purpose of creation of ABHA. I understand that my ABHA can be used and shared for purposes as may be notified by ABDM from time to time including provision of healthcare services. Further, I am aware that my personal identifiable information (Name, Address, Age, Date of Birth, Gender and Photograph) may be made available to the entities working in the National Digital Health Ecosystem (NDHE) which inter alia includes stakeholders and entities such as healthcare professionals (e.g. doctors), facilities (e.g. hospitals, laboratories) and data fiduciaries (e.g. health programmes), which are registered with or linked to the Ayushman Bharat Digital Mission (ABDM), and various processes there under. I authorize NHA to use my Aadhaar number / Virtual ID for performing Aadhaar based authentication with UIDAI as per the provisions of the Aadhaar (Targeted Delivery of Financial and other Subsidies, Benefits and Services) Act, 2016 for the aforesaid purpose. I understand that UIDAI will share my e-KYC details, or response of “Yes” with NHA upon successful authentication.\n \n \n I have been duly informed about the option of using other IDs apart from Aadhaar; however, I consciously choose to use Aadhaar number / Virtual ID for the purpose of availing benefits across the NDHE. I am aware that my personal identifiable information excluding Aadhaar number / VID number can be used and shared for purposes as mentioned above. I reserve the right to revoke the given consent at any point of time as per provisions of Aadhaar Act and Regulations."
export const BirthDosesJson = [
    {

        "sno": 1,
        "vaccine": "BCG"
    },
    {

        "sno": 2,
        "vaccine": "Hep B"
    },
    {

        "sno": 3,
        "vaccine": "OPV 0"
    },
]

export const SixWeekDosesJson = [
    {

        "sno": 4,
        "vaccine": "Penta 1"
    },
    {

        "sno": 5,
        "vaccine": "OPV 1"
    },
    {

        "sno": 6,
        "vaccine": "PCV 1"
    },
    {

        "sno": 7,
        "vaccine": "Rota 1"
    },
    {

        "sno": 8,
        "vaccine": "IPV 1"
    },
]

export const TenWeekDosesJson = [
    {

        "sno": 9,
        "vaccine": "Penta 2"
    },
    {

        "sno": 10,
        "vaccine": "OPV 2"
    },
    {

        "sno": 11,
        "vaccine": "Rota 2"
    },
]

export const FourteenWeekDosesJson = [
    {

        "sno": 12,
        "vaccine": "Penta 3"
    },
    {

        "sno": 13,
        "vaccine": "OPV 3"
    },
    {

        "sno": 14,
        "vaccine": "PCV 2"
    },
    {

        "sno": 15,
        "vaccine": "Rota 3"
    },
    {

        "sno": 16,
        "vaccine": "IPV 2"
    },
]

export const NineMonthsDosesJson = [
    {

        "sno": 17,
        "vaccine": "MR 1"
    },
    {

        "sno": 18,
        "vaccine": "PCV B"
    }
]

export const SixteenMonthsDosesJson = [
    {

        "sno": 19,
        "vaccine": "DPT B 1"
    },
    {

        "sno": 20,
        "vaccine": "OPV B"
    },
    {

        "sno": 21,
        "vaccine": "MR 2"
    }
]

export const AssesViewJson = [
    {
        "sno": 1,
        "symptom": "Not feeding well/ Not able to feed"
    },
    {
        "sno": 2,
        "symptom": "Had Convulsions"
    },
    {
        "sno": 3,
        "symptom": "Severe  Chest Indrawing"
    },
    {
        "sno": 4,
        "symptom": "No Movement"
    },
    {
        "sno": 5,
        "symptom": "Movement on stimulation only"
    },
    {
        "sno": 6,
        "symptom": "Umbilicus is red"
    },
    {
        "sno": 7,
        "symptom": "Umbilicus is draining pus"
    },
    {
        "sno": 8,
        "symptom": "Skin Pustules"
    }
]

export const BreastFeedingSymptoms = [
    {
        "sno": 1,
        "symptom": "Attachment to breast is not good"
    },
    {
        "sno": 2,
        "symptom": "Not suckling effectively"
    },
    {
        "sno": 3,
        "symptom": "Received other food or drink"
    },
    {
        "sno": 4,
        "symptom": "Ulcer or white patch in mouth"
    },
    {
        "sno": 5,
        "symptom": "Breast or nipple problem"
    }
]

export const ChildDiarrheaSymptoms = [
    {
        "sno": 1,
        "symptom": "Lethargic or Unconscious",
        "title": ""
    },
    {
        "sno": 2,
        "symptom": "Sunken Eyes",
        "title": ""
    },
    {
        "sno": 3,
        "symptom": "Not able to drink/drinking poorly",
        "title": ""
    },
    {
        "sno": 4,
        "symptom": "Skin pinch goes back very slowly",
        "title": "Takes longer than 2 seconds"
    },
    {
        "sno": 5,
        "symptom": "Restless/Irritable",
        "title": ""
    },
    {
        "sno": 6,
        "symptom": "Drinks eagerly/thirsty",
        "title": ""
    },
    {
        "sno": 7,
        "symptom": "Skin pinch goes back slowly",
        "title": "Takes less than 2 seconds but not immediately"
    }
]


export const GET_COLLECTION = 'getCollection';
