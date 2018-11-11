var config = {};

config.web_port = 3000;
config.database = "//localhost:27017/CDAP";
config.imageSavePath = "./uploads";
config.ward1Avalability=30;
config.ward2Avalability=30;
config.ward3Avalability=30;
config.hospitalCount=150;
config.ward1BedCount=25;
config.ward2BedCount=25;
config.ward3BedCount=25;
config.maxPatientCountPerNurse=8;
config.researchAreaArray =[ 
    {
        "year" : "2017",
        "month" : "jan",
        "district" : "colombo",
        "total" : 34274,
        "count" : 2734
    }, 
    {
        "year" : "2017",
        "month" : "feb",
        "district" : "colombo",
        "total" : 34274,
        "count" : 1900
    }, 
    {
        "year" : "2017",
        "month" : "march",
        "district" : "colombo",
        "total" : 34274,
        "count" : 2467
    }, 
    {
        "year" : "2017",
        "month" : "april",
        "district" : "colombo",
        "total" : 34274,
        "count" : 2570
    }, 
    {
        "year" : "2017",
        "month" : "may",
        "district" : "colombo",
        "total" : 34274,
        "count" : 3333
    }, 
    {
        "year" : "2017",
        "month" : "june",
        "district" : "colombo",
        "total" : 34274,
        "count" : 5372
    }, 
    {
        "year" : "2017",
        "month" : "july",
        "district" : "colombo",
        "total" : 34274,
        "count" : 7471
    }, 
    {
        "year" : "2017",
        "month" : "aug",
        "district" : "colombo",
        "total" : 34274,
        "count" : 3620
    }, 
    {
        "year" : "2017",
        "month" : "sept",
        "district" : "colombo",
        "total" : 34274,
        "count" : 1251
    }, 
    {
        "year" : "2017",
        "month" : "oct",
        "district" : "colombo",
        "total" : 34274,
        "count" : 823
    }, 
    {
        "year" : "2017",
        "month" : "nov",
        "district" : "colombo",
        "total" : 34274,
        "count" : 1131
    }, 
    {
        "year" : "2017",
        "month" : "dec",
        "district" : "colombo",
        "total" : 34274,
        "count" : 1602
    }, 
    {
        "year" : "2017",
        "month" : "jan",
        "district" : "Gampaha",
        "total" : 31647,
        "count" : 1635
    }, 
    {
        "year" : "2017",
        "month" : "feb",
        "district" : "Gampaha",
        "total" : 31647,
        "count" : 1087
    }, 
    {
        "year" : "2017",
        "month" : "march",
        "district" : "Gampaha",
        "total" : 31647,
        "count" : 1870
    }, 
    {
        "year" : "2017",
        "month" : "april",
        "district" : "Gampaha",
        "total" : 31647,
        "count" : 2072
    }, 
    {
        "year" : "2017",
        "month" : "may",
        "district" : "Gampaha",
        "total" : 31647,
        "count" : 3168
    }, 
    {
        "year" : "2017",
        "month" : "june",
        "district" : "Gampaha",
        "total" : 31647,
        "count" : 4901
    }, 
    {
        "year" : "2017",
        "month" : "july",
        "district" : "Gampaha",
        "total" : 31647,
        "count" : 9039
    }, 
    {
        "year" : "2017",
        "month" : "aug",
        "district" : "Gampaha",
        "total" : 31647,
        "count" : 3553
    }, 
    {
        "year" : "2017",
        "month" : "sept",
        "district" : "Gampaha",
        "total" : 31647,
        "count" : 1246
    }, 
    {
        "year" : "2017",
        "month" : "oct",
        "district" : "Gampaha",
        "total" : 31647,
        "count" : 779
    }, 
    {
        "year" : "2017",
        "month" : "nov",
        "district" : "Gampaha",
        "total" : 31647,
        "count" : 1078
    }, 
    {
        "year" : "2017",
        "month" : "dec",
        "district" : "Gampaha",
        "total" : 31647,
        "count" : 1219
    }, 
    {
        "year" : "2017",
        "month" : "jan",
        "district" : "Kalutara",
        "total" : 10961,
        "count" : 581
    }, 
    {
        "year" : "2017",
        "month" : "feb",
        "district" : "Kalutara",
        "total" : 10961,
        "count" : 448
    }, 
    {
        "year" : "2017",
        "month" : "march",
        "district" : "Kalutara",
        "total" : 10961,
        "count" : 836
    }, 
    {
        "year" : "2017",
        "month" : "april",
        "district" : "Kalutara",
        "total" : 10961,
        "count" : 739
    }, 
    {
        "year" : "2017",
        "month" : "may",
        "district" : "Kalutara",
        "total" : 10961,
        "count" : 946
    }, 
    {
        "year" : "2017",
        "month" : "june",
        "district" : "Kalutara",
        "total" : 10961,
        "count" : 1248
    }, 
    {
        "year" : "2017",
        "month" : "july",
        "district" : "Kalutara",
        "total" : 10961,
        "count" : 2612
    }, 
    {
        "year" : "2017",
        "month" : "aug",
        "district" : "Kalutara",
        "total" : 10961,
        "count" : 1477
    }, 
    {
        "year" : "2017",
        "month" : "sep",
        "district" : "Kalutara",
        "total" : 10961,
        "count" : 663
    }, 
    {
        "year" : "2017",
        "month" : "oct",
        "district" : "Kalutara",
        "total" : 10961,
        "count" : 337
    }, 
    {
        "year" : "2017",
        "month" : "nov",
        "district" : "Kalutara",
        "total" : 10961,
        "count" : 528
    }, 
    {
        "year" : "2017",
        "month" : "dec",
        "district" : "Kalutara",
        "total" : 10961,
        "count" : 546
    }, 
    {
        "year" : "2017",
        "month" : "jan",
        "district" : "Kandy",
        "total" : 14408,
        "count" : 252
    }, 
    {
        "year" : "2017",
        "month" : "feb",
        "district" : "Kandy",
        "total" : 14408,
        "count" : 207
    }, 
    {
        "year" : "2017",
        "month" : "march",
        "district" : "Kandy",
        "total" : 14408,
        "count" : 369
    }, 
    {
        "year" : "2017",
        "month" : "april",
        "district" : "Kandy",
        "total" : 14408,
        "count" : 443
    }, 
    {
        "year" : "2017",
        "month" : "may",
        "district" : "Kandy",
        "total" : 14408,
        "count" : 862
    }, 
    {
        "year" : "2017",
        "month" : "june",
        "district" : "Kandy",
        "total" : 14408,
        "count" : 2314
    }, 
    {
        "year" : "2017",
        "month" : "july",
        "district" : "Kandy",
        "total" : 14408,
        "count" : 3855
    }, 
    {
        "year" : "2017",
        "month" : "aug",
        "district" : "Kandy",
        "total" : 14408,
        "count" : 2354
    }, 
    {
        "year" : "2017",
        "month" : "sep",
        "district" : "Kandy",
        "total" : 14408,
        "count" : 1090
    }, 
    {
        "year" : "2017",
        "month" : "oct",
        "district" : "Kandy",
        "total" : 14408,
        "count" : 821
    }, 
    {
        "year" : "2017",
        "month" : "nov",
        "district" : "Kandy",
        "total" : 14408,
        "count" : 884
    }, 
    {
        "year" : "2017",
        "month" : "dec",
        "district" : "Kandy",
        "total" : 14408,
        "count" : 957
    }, 
    {
        "year" : "2017",
        "month" : "jan",
        "district" : "Matale",
        "total" : 3171,
        "count" : 129
    }, 
    {
        "year" : "2017",
        "month" : "feb",
        "district" : "Matale",
        "total" : 3171,
        "count" : 103
    }, 
    {
        "year" : "2017",
        "month" : "march",
        "district" : "Matale",
        "total" : 3171,
        "count" : 145
    }, 
    {
        "year" : "2017",
        "month" : "april",
        "district" : "Matale",
        "total" : 3171,
        "count" : 120
    }, 
    {
        "year" : "2017",
        "month" : "may",
        "district" : "Matale",
        "total" : 3171,
        "count" : 165
    }, 
    {
        "year" : "2017",
        "month" : "june",
        "district" : "Matale",
        "total" : 3171,
        "count" : 436
    }, 
    {
        "year" : "2017",
        "month" : "july",
        "district" : "Matale",
        "total" : 3171,
        "count" : 766
    }, 
    {
        "year" : "2017",
        "month" : "aug",
        "district" : "Matale",
        "total" : 3171,
        "count" : 534
    }, 
    {
        "year" : "2017",
        "month" : "sep",
        "district" : "Matale",
        "total" : 3171,
        "count" : 167
    }, 
    {
        "year" : "2017",
        "month" : "oct",
        "district" : "Matale",
        "total" : 3171,
        "count" : 177
    }, 
    {
        "year" : "2017",
        "month" : "nov",
        "district" : "Matale",
        "total" : 3171,
        "count" : 214
    }, 
    {
        "year" : "2017",
        "month" : "dec",
        "district" : "Matale",
        "total" : 3171,
        "count" : 215
    }, 
    {
        "year" : "2017",
        "month" : "jan",
        "district" : "Nuwara Eliya",
        "total" : 892,
        "count" : 50
    }, 
    {
        "year" : "2017",
        "month" : "feb",
        "district" : "Nuwara Eliya",
        "total" : 892,
        "count" : 32
    }, 
    {
        "year" : "2017",
        "month" : "march",
        "district" : "Nuwara Eliya",
        "total" : 892,
        "count" : 42
    }, 
    {
        "year" : "2017",
        "month" : "april",
        "district" : "Nuwara Eliya",
        "total" : 892,
        "count" : 37
    }, 
    {
        "year" : "2017",
        "month" : "may",
        "district" : "Nuwara Eliya",
        "total" : 892,
        "count" : 57
    }, 
    {
        "year" : "2017",
        "month" : "june",
        "district" : "Nuwara Eliya",
        "total" : 892,
        "count" : 94
    }, 
    {
        "year" : "2017",
        "month" : "july",
        "district" : "Nuwara Eliya",
        "total" : 892,
        "count" : 294
    }, 
    {
        "year" : "2017",
        "month" : "aug",
        "district" : "Nuwara Eliya",
        "total" : 892,
        "count" : 159
    }, 
    {
        "year" : "2017",
        "month" : "sep",
        "district" : "Nuwara Eliya",
        "total" : 892,
        "count" : 39
    }, 
    {
        "year" : "2017",
        "month" : "oct",
        "district" : "Nuwara Eliya",
        "total" : 892,
        "count" : 27
    }, 
    {
        "year" : "2017",
        "month" : "nov",
        "district" : "Nuwara Eliya",
        "total" : 892,
        "count" : 22
    }, 
    {
        "year" : "2017",
        "month" : "dec",
        "district" : "Nuwara Eliya",
        "total" : 892,
        "count" : 39
    }, 
    {
        "year" : "2017",
        "month" : "jan",
        "district" : "Galle",
        "total" : 6265,
        "count" : 872
    }, 
    {
        "year" : "2017",
        "month" : "feb",
        "district" : "Galle",
        "total" : 6265,
        "count" : 567
    }, 
    {
        "year" : "2017",
        "month" : "march",
        "district" : "Galle",
        "total" : 6265,
        "count" : 424
    }, 
    {
        "year" : "2017",
        "month" : "april",
        "district" : "Galle",
        "total" : 6265,
        "count" : 265
    }, 
    {
        "year" : "2017",
        "month" : "may",
        "district" : "Galle",
        "total" : 6265,
        "count" : 394
    }, 
    {
        "year" : "2017",
        "month" : "june",
        "district" : "Galle",
        "total" : 6265,
        "count" : 623
    }, 
    {
        "year" : "2017",
        "month" : "july",
        "district" : "Galle",
        "total" : 6265,
        "count" : 1072
    }, 
    {
        "year" : "2017",
        "month" : "aug",
        "district" : "Galle",
        "total" : 6265,
        "count" : 877
    }, 
    {
        "year" : "2017",
        "month" : "sep",
        "district" : "Galle",
        "total" : 6265,
        "count" : 369
    }, 
    {
        "year" : "2017",
        "month" : "oct",
        "district" : "Galle",
        "total" : 6265,
        "count" : 163
    }, 
    {
        "year" : "2017",
        "month" : "nov",
        "district" : "Galle",
        "total" : 6265,
        "count" : 300
    }, 
    {
        "year" : "2017",
        "month" : "dec",
        "district" : "Galle",
        "total" : 6265,
        "count" : 339
    }, 
    {
        "year" : "2017",
        "month" : "jan",
        "district" : "Hambantota",
        "total" : 3578,
        "count" : 301
    }, 
    {
        "year" : "2017",
        "month" : "feb",
        "district" : "Hambantota",
        "total" : 3578,
        "count" : 225
    }, 
    {
        "year" : "2017",
        "month" : "march",
        "district" : "Hambantota",
        "total" : 3578,
        "count" : 339
    }, 
    {
        "year" : "2017",
        "month" : "april",
        "district" : "Hambantota",
        "total" : 3578,
        "count" : 333
    }, 
    {
        "year" : "2017",
        "month" : "may",
        "district" : "Hambantota",
        "total" : 3578,
        "count" : 272
    }, 
    {
        "year" : "2017",
        "month" : "june",
        "district" : "Hambantota",
        "total" : 3578,
        "count" : 384
    }, 
    {
        "year" : "2017",
        "month" : "july",
        "district" : "Hambantota",
        "total" : 3578,
        "count" : 529
    }, 
    {
        "year" : "2017",
        "month" : "aug",
        "district" : "Hambantota",
        "total" : 3578,
        "count" : 359
    }, 
    {
        "year" : "2017",
        "month" : "sep",
        "district" : "Hambantota",
        "total" : 3578,
        "count" : 237
    }, 
    {
        "year" : "2017",
        "month" : "oct",
        "district" : "Hambantota",
        "total" : 3578,
        "count" : 174
    }, 
    {
        "year" : "2017",
        "month" : "nov",
        "district" : "Hambantota",
        "total" : 3578,
        "count" : 244
    }, 
    {
        "year" : "2017",
        "month" : "dec",
        "district" : "Hambantota",
        "total" : 3578,
        "count" : 181
    }, 
    {
        "year" : "2017",
        "month" : "jan",
        "district" : "Matara",
        "total" : 6331,
        "count" : 431
    }, 
    {
        "year" : "2017",
        "month" : "feb",
        "district" : "Matara",
        "total" : 6331,
        "count" : 382
    }, 
    {
        "year" : "2017",
        "month" : "march",
        "district" : "Matara",
        "total" : 6331,
        "count" : 337
    }, 
    {
        "year" : "2017",
        "month" : "april",
        "district" : "Matara",
        "total" : 6331,
        "count" : 354
    }, 
    {
        "year" : "2017",
        "month" : "may",
        "district" : "Matara",
        "total" : 6331,
        "count" : 488
    }, 
    {
        "year" : "2017",
        "month" : "june",
        "district" : "Matara",
        "total" : 6331,
        "count" : 581
    }, 
    {
        "year" : "2017",
        "month" : "july",
        "district" : "Matara",
        "total" : 6331,
        "count" : 1789
    }, 
    {
        "year" : "2017",
        "month" : "aug",
        "district" : "Matara",
        "total" : 6331,
        "count" : 1029
    }, 
    {
        "year" : "2017",
        "month" : "sep",
        "district" : "Matara",
        "total" : 6331,
        "count" : 403
    }, 
    {
        "year" : "2017",
        "month" : "oct",
        "district" : "Matara",
        "total" : 6331,
        "count" : 174
    }, 
    {
        "year" : "2017",
        "month" : "nov",
        "district" : "Matara",
        "total" : 6331,
        "count" : 181
    }, 
    {
        "year" : "2017",
        "month" : "dec",
        "district" : "Matara",
        "total" : 6331,
        "count" : 182
    }, 
    {
        "year" : "2017",
        "month" : "jan",
        "district" : "Jaffna",
        "total" : 6075,
        "count" : 625
    }, 
    {
        "year" : "2017",
        "month" : "feb",
        "district" : "Jaffna",
        "total" : 6075,
        "count" : 478
    }, 
    {
        "year" : "2017",
        "month" : "march",
        "district" : "Jaffna",
        "total" : 6075,
        "count" : 863
    }, 
    {
        "year" : "2017",
        "month" : "april",
        "district" : "Jaffna",
        "total" : 6075,
        "count" : 499
    }, 
    {
        "year" : "2017",
        "month" : "may",
        "district" : "Jaffna",
        "total" : 6075,
        "count" : 301
    }, 
    {
        "year" : "2017",
        "month" : "june",
        "district" : "Jaffna",
        "total" : 6075,
        "count" : 288
    }, 
    {
        "year" : "2017",
        "month" : "july",
        "district" : "Jaffna",
        "total" : 6075,
        "count" : 376
    }, 
    {
        "year" : "2017",
        "month" : "aug",
        "district" : "Jaffna",
        "total" : 6075,
        "count" : 290
    }, 
    {
        "year" : "2017",
        "month" : "sep",
        "district" : "Jaffna",
        "total" : 6075,
        "count" : 341
    }, 
    {
        "year" : "2017",
        "month" : "oct",
        "district" : "Jaffna",
        "total" : 6075,
        "count" : 593
    }, 
    {
        "year" : "2017",
        "month" : "nov",
        "district" : "Jaffna",
        "total" : 6075,
        "count" : 509
    }, 
    {
        "year" : "2017",
        "month" : "dec",
        "district" : "Jaffna",
        "total" : 6075,
        "count" : 912
    }, 
    {
        "year" : "2017",
        "month" : "jan",
        "district" : "Kilinochchi",
        "total" : 518,
        "count" : 55
    }, 
    {
        "year" : "2017",
        "month" : "feb",
        "district" : "Kilinochchi",
        "total" : 518,
        "count" : 84
    }, 
    {
        "year" : "2017",
        "month" : "march",
        "district" : "Kilinochchi",
        "total" : 518,
        "count" : 35
    }, 
    {
        "year" : "2017",
        "month" : "april",
        "district" : "Kilinochchi",
        "total" : 518,
        "count" : 46
    }, 
    {
        "year" : "2017",
        "month" : "may",
        "district" : "Kilinochchi",
        "total" : 518,
        "count" : 21
    }, 
    {
        "year" : "2017",
        "month" : "june",
        "district" : "Kilinochchi",
        "total" : 518,
        "count" : 21
    }, 
    {
        "year" : "2017",
        "month" : "july",
        "district" : "Kilinochchi",
        "total" : 518,
        "count" : 90
    }, 
    {
        "year" : "2017",
        "month" : "aug",
        "district" : "Kilinochchi",
        "total" : 518,
        "count" : 59
    }, 
    {
        "year" : "2017",
        "month" : "sep",
        "district" : "Kilinochchi",
        "total" : 518,
        "count" : 30
    }, 
    {
        "year" : "2017",
        "month" : "oct",
        "district" : "Kilinochchi",
        "total" : 518,
        "count" : 17
    }, 
    {
        "year" : "2017",
        "month" : "nov",
        "district" : "Kilinochchi",
        "total" : 518,
        "count" : 28
    }, 
    {
        "year" : "2017",
        "month" : "dec",
        "district" : "Kilinochchi",
        "total" : 518,
        "count" : 32
    }, 
    {
        "year" : "2017",
        "month" : "jan",
        "district" : "Mannar",
        "total" : 543,
        "count" : 147
    }, 
    {
        "year" : "2017",
        "month" : "feb",
        "district" : "Mannar",
        "total" : 543,
        "count" : 91
    }, 
    {
        "year" : "2017",
        "month" : "march",
        "district" : "Mannar",
        "total" : 543,
        "count" : 65
    }, 
    {
        "year" : "2017",
        "month" : "april",
        "district" : "Mannar",
        "total" : 543,
        "count" : 90
    }, 
    {
        "year" : "2017",
        "month" : "may",
        "district" : "Mannar",
        "total" : 543,
        "count" : 60
    }, 
    {
        "year" : "2017",
        "month" : "june",
        "district" : "Mannar",
        "total" : 543,
        "count" : 23
    }, 
    {
        "year" : "2017",
        "month" : "july",
        "district" : "Mannar",
        "total" : 543,
        "count" : 23
    }, 
    {
        "year" : "2017",
        "month" : "aug",
        "district" : "Mannar",
        "total" : 543,
        "count" : 5
    }, 
    {
        "year" : "2017",
        "month" : "sep",
        "district" : "Mannar",
        "total" : 543,
        "count" : 3
    }, 
    {
        "year" : "2017",
        "month" : "oct",
        "district" : "Mannar",
        "total" : 543,
        "count" : 6
    }, 
    {
        "year" : "2017",
        "month" : "nov",
        "district" : "Mannar",
        "total" : 543,
        "count" : 8
    }, 
    {
        "year" : "2017",
        "month" : "dec",
        "district" : "Mannar",
        "total" : 543,
        "count" : 22
    }
];
module.exports = config;
    