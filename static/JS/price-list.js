const shipments = [
  {
    "type": "belowstandard",
    "from": "SHR",
    "to": "GZ",
    "price": 65
  },
  {
    "type": "belowstandard",
    "from": "GZ",
    "to": "SHR",
    "price": 65
  },
  {
    "type": "belowstandard",
    "from": "SHR",
    "to": "C",
    "price": 65
  },
  {
    "type": "belowstandard",
    "from": "C",
    "to": "SHR",
    "price": 65
  },
  {
    "type": "abovestandard",
    "from": "SHR",
    "to": "GZ",
    "price": 95
  },
  {
    "type": "abovestandard",
    "from": "GZ",
    "to": "SHR",
    "price": 95
  },
  {
    "type": "abovestandard",
    "from": "SHR",
    "to": "C",
    "price": 95
  },
  {
    "type": "abovestandard",
    "from": "C",
    "to": "SHR",
    "price": 95
  },
  {
    "type": "belowstandard",
    "from": "SHR",
    "to": "SHR",
    "price": 55
  },
  {
    "type": "abovestandard",
    "from": "SHR",
    "to": "SHR",
    "price": 75
  },
  {
    "type": "belowstandard",
    "from": "SHR",
    "to": "DK",
    "price": 60
  },
  {
    "type": "abovestandard",
    "from": "SHR",
    "to": "DK",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "DK",
    "to": "SHR",
    "price": 60
  },
  {
    "type": "abovestandard",
    "from": "DK",
    "to": "SHR",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "SHR",
    "to": "ALX",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "ALX",
    "to": "SHR",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "SHR",
    "to": "ALX",
    "price": 95
  },
  {
    "type": "abovestandard",
    "from": "ALX",
    "to": "SHR",
    "price": 95
  },
  {
    "type": "belowstandard",
    "from": "SHR",
    "to": "BH",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "BH",
    "to": "SHR",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "SHR",
    "to": "BH",
    "price": 85
  },
  {
    "type": "abovestandard",
    "from": "BH",
    "to": "SHR",
    "price": 85
  },
  {
    "type": "belowstandard",
    "from": "SHR",
    "to": "GH",
    "price": 65
  },
  {
    "type": "belowstandard",
    "from": "GH",
    "to": "SHR",
    "price": 65
  },
  {
    "type": "abovestandard",
    "from": "SHR",
    "to": "GH",
    "price": 85
  },
  {
    "type": "abovestandard",
    "from": "GH",
    "to": "SHR",
    "price": 85
  },
  {
    "type": "belowstandard",
    "from": "SHR",
    "to": "KB",
    "price": 65
  },
  {
    "type": "belowstandard",
    "from": "KB",
    "to": "SHR",
    "price": 65
  },
  {
    "type": "abovestandard",
    "from": "SHR",
    "to": "KB",
    "price": 85
  },
  {
    "type": "abovestandard",
    "from": "KB",
    "to": "SHR",
    "price": 85
  },
  {
    "type": "belowstandard",
    "from": "SHR",
    "to": "MNF",
    "price": 65
  },
  {
    "type": "belowstandard",
    "from": "MNF",
    "to": "SHR",
    "price": 65
  },
  {
    "type": "abovestandard",
    "from": "SHR",
    "to": "MNF",
    "price": 85
  },
  {
    "type": "abovestandard",
    "from": "MNF",
    "to": "SHR",
    "price": 85
  },
  {
    "type": "belowstandard",
    "from": "SHR",
    "to": "KFS",
    "price": 65
  },
  {
    "type": "belowstandard",
    "from": "KFS",
    "to": "SHR",
    "price": 65
  },
  {
    "type": "abovestandard",
    "from": "SHR",
    "to": "KFS",
    "price": 85
  },
  {
    "type": "abovestandard",
    "from": "KFS",
    "to": "SHR",
    "price": 85
  },
  {
    "type": "belowstandard",
    "from": "SHR",
    "to": "PTS",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "PTS",
    "to": "SHR",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "SHR",
    "to": "PTS",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "PTS",
    "to": "SHR",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "SHR",
    "to": "DT",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "DT",
    "to": "SHR",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "SHR",
    "to": "DT",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "DT",
    "to": "SHR",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "SHR",
    "to": "IS",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "IS",
    "to": "SHR",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "SHR",
    "to": "IS",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "IS",
    "to": "SHR",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "SHR",
    "to": "SUZ",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "SUZ",
    "to": "SHR",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "SHR",
    "to": "SUZ",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "SUZ",
    "to": "SHR",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "SHR",
    "to": "FYM",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "FYM",
    "to": "SHR",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "SHR",
    "to": "FYM",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "FYM",
    "to": "SHR",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "SHR",
    "to": "MN",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "MN",
    "to": "SHR",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "SHR",
    "to": "MN",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "MN",
    "to": "SHR",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "SHR",
    "to": "ASN",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "ASN",
    "to": "SHR",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "SHR",
    "to": "ASN",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "ASN",
    "to": "SHR",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "SHR",
    "to": "AST",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "AST",
    "to": "SHR",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "SHR",
    "to": "AST",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "AST",
    "to": "SHR",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "SHR",
    "to": "BNS",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "BNS",
    "to": "SHR",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "SHR",
    "to": "BNS",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "BNS",
    "to": "SHR",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "SHR",
    "to": "LX",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "LX",
    "to": "SHR",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "SHR",
    "to": "LX",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "LX",
    "to": "SHR",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "SHR",
    "to": "KN",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "KN",
    "to": "SHR",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "SHR",
    "to": "KN",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "KN",
    "to": "SHR",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "SHR",
    "to": "SHG",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "SHG",
    "to": "SHR",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "SHR",
    "to": "SHG",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "SHG",
    "to": "SHR",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "SHR",
    "to": "BA",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "BA",
    "to": "SHR",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "SHR",
    "to": "BA",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "BA",
    "to": "SHR",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "SHR",
    "to": "JS",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "JS",
    "to": "SHR",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "SHR",
    "to": "JS",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "JS",
    "to": "SHR",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "SHR",
    "to": "MT",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "MT",
    "to": "SHR",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "SHR",
    "to": "MT",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "MT",
    "to": "SHR",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "SHR",
    "to": "WAD",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "WAD",
    "to": "SHR",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "SHR",
    "to": "WAD",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "WAD",
    "to": "SHR",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "C",
    "to": "C",
    "price": 50
  },
  {
    "type": "abovestandard",
    "from": "C",
    "to": "C",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "C",
    "to": "MNS",
    "price": 65
  },
  {
    "type": "belowstandard",
    "from": "MNS",
    "to": "C",
    "price": 65
  },
  {
    "type": "abovestandard",
    "from": "C",
    "to": "MNS",
    "price": 85
  },
  {
    "type": "abovestandard",
    "from": "MNS",
    "to": "C",
    "price": 85
  },
  {
    "type": "belowstandard",
    "from": "C",
    "to": "HLW",
    "price": 55
  },
  {
    "type": "belowstandard",
    "from": "HLW",
    "to": "C",
    "price": 55
  },
  {
    "type": "abovestandard",
    "from": "C",
    "to": "HLW",
    "price": 65
  },
  {
    "type": "abovestandard",
    "from": "HLW",
    "to": "C",
    "price": 65
  },
  {
    "type": "belowstandard",
    "from": "C",
    "to": "ALX",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "ALX",
    "to": "C",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "C",
    "to": "ALX",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "ALX",
    "to": "C",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "C",
    "to": "GZ",
    "price": 55
  },
  {
    "type": "belowstandard",
    "from": "GZ",
    "to": "C",
    "price": 55
  },
  {
    "type": "abovestandard",
    "from": "C",
    "to": "GZ",
    "price": 60
  },
  {
    "type": "abovestandard",
    "from": "GZ",
    "to": "C",
    "price": 60
  },
  {
    "type": "belowstandard",
    "from": "C",
    "to": "SUZ",
    "price": 75
  },
  {
    "type": "belowstandard",
    "from": "SUZ",
    "to": "C",
    "price": 75
  },
  {
    "type": "abovestandard",
    "from": "C",
    "to": "SUZ",
    "price": 95
  },
  {
    "type": "abovestandard",
    "from": "SUZ",
    "to": "C",
    "price": 95
  },
  {
    "type": "belowstandard",
    "from": "C",
    "to": "ASN",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "ASN",
    "to": "C",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "C",
    "to": "ASN",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "ASN",
    "to": "C",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "C",
    "to": "AST",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "AST",
    "to": "C",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "C",
    "to": "AST",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "AST",
    "to": "C",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "C",
    "to": "BNS",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "BNS",
    "to": "C",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "C",
    "to": "BNS",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "BNS",
    "to": "C",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "C",
    "to": "IS",
    "price": 75
  },
  {
    "type": "belowstandard",
    "from": "IS",
    "to": "C",
    "price": 75
  },
  {
    "type": "abovestandard",
    "from": "C",
    "to": "IS",
    "price": 85
  },
  {
    "type": "abovestandard",
    "from": "IS",
    "to": "C",
    "price": 85
  },
  {
    "type": "belowstandard",
    "from": "C",
    "to": "FYM",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "FYM",
    "to": "C",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "C",
    "to": "FYM",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "FYM",
    "to": "C",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "C",
    "to": "PTS",
    "price": 85
  },
  {
    "type": "belowstandard",
    "from": "PTS",
    "to": "C",
    "price": 85
  },
  {
    "type": "abovestandard",
    "from": "C",
    "to": "PTS",
    "price": 95
  },
  {
    "type": "abovestandard",
    "from": "PTS",
    "to": "C",
    "price": 95
  },
  {
    "type": "belowstandard",
    "from": "C",
    "to": "DT",
    "price": 95
  },
  {
    "type": "belowstandard",
    "from": "DT",
    "to": "C",
    "price": 95
  },
  {
    "type": "abovestandard",
    "from": "C",
    "to": "DT",
    "price": 105
  },
  {
    "type": "abovestandard",
    "from": "DT",
    "to": "C",
    "price": 105
  },
  {
    "type": "belowstandard",
    "from": "C",
    "to": "GH",
    "price": 65
  },
  {
    "type": "belowstandard",
    "from": "GH",
    "to": "C",
    "price": 65
  },
  {
    "type": "abovestandard",
    "from": "C",
    "to": "GH",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "GH",
    "to": "C",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "C",
    "to": "MNF",
    "price": 65
  },
  {
    "type": "belowstandard",
    "from": "MNF",
    "to": "C",
    "price": 65
  },
  {
    "type": "abovestandard",
    "from": "C",
    "to": "MNF",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "MNF",
    "to": "C",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "C",
    "to": "WAD",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "WAD",
    "to": "C",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "C",
    "to": "WAD",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "WAD",
    "to": "C",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "C",
    "to": "BH",
    "price": 75
  },
  {
    "type": "belowstandard",
    "from": "BH",
    "to": "C",
    "price": 75
  },
  {
    "type": "abovestandard",
    "from": "C",
    "to": "BH",
    "price": 95
  },
  {
    "type": "abovestandard",
    "from": "BH",
    "to": "C",
    "price": 95
  },
  {
    "type": "belowstandard",
    "from": "C",
    "to": "MN",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "MN",
    "to": "C",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "C",
    "to": "MN",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "MN",
    "to": "C",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "C",
    "to": "KFS",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "KFS",
    "to": "C",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "C",
    "to": "KFS",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "KFS",
    "to": "C",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "C",
    "to": "MT",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "MT",
    "to": "C",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "C",
    "to": "MT",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "MT",
    "to": "C",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "C",
    "to": "LX",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "LX",
    "to": "C",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "C",
    "to": "LX",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "LX",
    "to": "C",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "C",
    "to": "KN",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "KN",
    "to": "C",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "C",
    "to": "KN",
    "price": 115
  },
  {
    "type": "abovestandard",
    "from": "KN",
    "to": "C",
    "price": 115
  },
  {
    "type": "belowstandard",
    "from": "C",
    "to": "SHG",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "SHG",
    "to": "C",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "C",
    "to": "SHG",
    "price": 115
  },
  {
    "type": "abovestandard",
    "from": "SHG",
    "to": "C",
    "price": 115
  },
  {
    "type": "belowstandard",
    "from": "C",
    "to": "OCT",
    "price": 60
  },
  {
    "type": "belowstandard",
    "from": "OCT",
    "to": "C",
    "price": 60
  },
  {
    "type": "abovestandard",
    "from": "C",
    "to": "OCT",
    "price": 80
  },
  { 
    "type": "abovestandard",
    "from": "OCT",
    "to": "C",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "C",
    "to": "BA",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "BA",
    "to": "C",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "C",
    "to": "BA",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "BA",
    "to": "C",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "C",
    "to": "JS",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "JS",
    "to": "C",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "C",
    "to": "JS",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "JS",
    "to": "C",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "MNS",
    "to": "MNS",
    "price": 50
  },
  {
    "type": "abovestandard",
    "from": "MNS",
    "to": "MNS",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "MNS",
    "to": "HLW",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "HLW",
    "to": "MNS",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "MNS",
    "to": "HLW",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "HLW",
    "to": "MNS",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "MNS",
    "to": "ALX",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "ALX",
    "to": "MNS",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "MNS",
    "to": "ALX",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "ALX",
    "to": "MNS",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "MNS",
    "to": "GZ",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "GZ",
    "to": "MNS",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "MNS",
    "to": "GZ",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "GZ",
    "to": "MNS",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "MNS",
    "to": "SUZ",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "SUZ",
    "to": "MNS",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "MNS",
    "to": "SUZ",
    "price": 95
  },
  {
    "type": "abovestandard",
    "from": "SUZ",
    "to": "MNS",
    "price": 95
  },
  {
    "type": "belowstandard",
    "from": "MNS",
    "to": "ASN",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "ASN",
    "to": "MNS",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "MNS",
    "to": "ASN",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "ASN",
    "to": "MNS",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "MNS",
    "to": "AST",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "AST",
    "to": "MNS",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "MNS",
    "to": "AST",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "AST",
    "to": "MNS",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "MNS",
    "to": "BNS",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "BNS",
    "to": "MNS",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "MNS",
    "to": "BNS",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "BNS",
    "to": "MNS",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "MNS",
    "to": "IS",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "IS",
    "to": "MNS",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "MNS",
    "to": "IS",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "IS",
    "to": "MNS",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "MNS",
    "to": "FYM",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "FYM",
    "to": "MNS",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "MNS",
    "to": "FYM",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "FYM",
    "to": "MNS",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "MNS",
    "to": "PTS",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "PTS",
    "to": "MNS",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "MNS",
    "to": "PTS",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "PTS",
    "to": "MNS",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "MNS",
    "to": "DT",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "DT",
    "to": "MNS",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "MNS",
    "to": "DT",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "DT",
    "to": "MNS",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "MNS",
    "to": "GH",
    "price": 60
  },
  {
    "type": "belowstandard",
    "from": "GH",
    "to": "MNS",
    "price": 60
  },
  {
    "type": "abovestandard",
    "from": "MNS",
    "to": "GH",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "GH",
    "to": "MNS",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "MNS",
    "to": "MNF",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "MNF",
    "to": "MNS",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "MNS",
    "to": "MNF",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "MNF",
    "to": "MNS",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "MNS",
    "to": "WAD",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "WAD",
    "to": "MNS",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "MNS",
    "to": "WAD",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "WAD",
    "to": "MNS",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "MNS",
    "to": "BH",
    "price": 75
  },
  {
    "type": "belowstandard",
    "from": "BH",
    "to": "MNS",
    "price": 75
  },
  {
    "type": "abovestandard",
    "from": "MNS",
    "to": "BH",
    "price": 95
  },
  {
    "type": "abovestandard",
    "from": "BH",
    "to": "MNS",
    "price": 95
  },
  {
    "type": "belowstandard",
    "from": "MNS",
    "to": "MN",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "MN",
    "to": "MNS",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "MNS",
    "to": "MN",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "MN",
    "to": "MNS",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "MNS",
    "to": "KFS",
    "price": 65
  },
  {
    "type": "belowstandard",
    "from": "KFS",
    "to": "MNS",
    "price": 65
  },
  {
    "type": "abovestandard",
    "from": "MNS",
    "to": "KFS",
    "price": 85
  },
  {
    "type": "abovestandard",
    "from": "KFS",
    "to": "MNS",
    "price": 85
  },
  {
    "type": "belowstandard",
    "from": "MNS",
    "to": "MT",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "MT",
    "to": "MNS",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "MNS",
    "to": "MT",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "MT",
    "to": "MNS",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "MNS",
    "to": "LX",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "LX",
    "to": "MNS",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "MNS",
    "to": "LX",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "LX",
    "to": "MNS",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "MNS",
    "to": "KN",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "KN",
    "to": "MNS",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "MNS",
    "to": "KN",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "KN",
    "to": "MNS",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "MNS",
    "to": "SHG",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "SHG",
    "to": "MNS",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "MNS",
    "to": "SHG",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "SHG",
    "to": "MNS",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "MNS",
    "to": "OCT",
    "price": 65
  },
  {
    "type": "belowstandard",
    "from": "OCT",
    "to": "MNS",
    "price": 65
  },
  {
    "type": "abovestandard",
    "from": "MNS",
    "to": "OCT",
    "price": 95
  },
  {
    "type": "abovestandard",
    "from": "OCT",
    "to": "MNS",
    "price": 95
  },
  {
    "type": "belowstandard",
    "from": "MNS",
    "to": "BA",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "BA",
    "to": "MNS",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "MNS",
    "to": "BA",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "BA",
    "to": "MNS",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "MNS",
    "to": "JS",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "JS",
    "to": "MNS",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "MNS",
    "to": "JS",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "JS",
    "to": "MNS",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "ALX",
    "to": "ALX",
    "price": 60
  },
  {
    "type": "abovestandard",
    "from": "ALX",
    "to": "ALX",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "ALX",
    "to": "HLW",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "HLW",
    "to": "ALX",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "ALX",
    "to": "HLW",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "HLW",
    "to": "ALX",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "ALX",
    "to": "GZ",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "GZ",
    "to": "ALX",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "ALX",
    "to": "GZ",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "GZ",
    "to": "ALX",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "ALX",
    "to": "SUZ",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "SUZ",
    "to": "ALX",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "ALX",
    "to": "SUZ",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "SUZ",
    "to": "ALX",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "ALX",
    "to": "ASN",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "ASN",
    "to": "ALX",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "ALX",
    "to": "ASN",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "ASN",
    "to": "ALX",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "ALX",
    "to": "AST",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "AST",
    "to": "ALX",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "ALX",
    "to": "AST",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "AST",
    "to": "ALX",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "ALX",
    "to": "BNS",
    "price": 75
  },
  {
    "type": "belowstandard",
    "from": "BNS",
    "to": "ALX",
    "price": 75
  },
  {
    "type": "abovestandard",
    "from": "ALX",
    "to": "BNS",
    "price": 95
  },
  {
    "type": "abovestandard",
    "from": "BNS",
    "to": "ALX",
    "price": 95
  },
  {
    "type": "belowstandard",
    "from": "ALX",
    "to": "IS",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "IS",
    "to": "ALX",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "ALX",
    "to": "IS",
    "price": 105
  },
  {
    "type": "abovestandard",
    "from": "IS",
    "to": "ALX",
    "price": 105
  },
  {
    "type": "belowstandard",
    "from": "ALX",
    "to": "FYM",
    "price": 75
  },
  {
    "type": "belowstandard",
    "from": "FYM",
    "to": "ALX",
    "price": 75
  },
  {
    "type": "abovestandard",
    "from": "ALX",
    "to": "FYM",
    "price": 95
  },
  {
    "type": "abovestandard",
    "from": "FYM",
    "to": "ALX",
    "price": 95
  },
  {
    "type": "belowstandard",
    "from": "ALX",
    "to": "PTS",
    "price": 75
  },
  {
    "type": "belowstandard",
    "from": "PTS",
    "to": "ALX",
    "price": 75
  },
  {
    "type": "abovestandard",
    "from": "ALX",
    "to": "PTS",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "PTS",
    "to": "ALX",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "ALX",
    "to": "DT",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "DT",
    "to": "ALX",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "ALX",
    "to": "DT",
    "price": 85
  },
  {
    "type": "abovestandard",
    "from": "DT",
    "to": "ALX",
    "price": 85
  },
  {
    "type": "belowstandard",
    "from": "ALX",
    "to": "GH",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "GH",
    "to": "ALX",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "ALX",
    "to": "GH",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "GH",
    "to": "ALX",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "ALX",
    "to": "MNF",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "MNF",
    "to": "ALX",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "ALX",
    "to": "MNF",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "MNF",
    "to": "ALX",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "ALX",
    "to": "WAD",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "WAD",
    "to": "ALX",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "ALX",
    "to": "WAD",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "WAD",
    "to": "ALX",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "ALX",
    "to": "BH",
    "price": 65
  },
  {
    "type": "belowstandard",
    "from": "BH",
    "to": "ALX",
    "price": 65
  },
  {
    "type": "abovestandard",
    "from": "ALX",
    "to": "BH",
    "price": 85
  },
  {
    "type": "abovestandard",
    "from": "BH",
    "to": "ALX",
    "price": 85
  },
  {
    "type": "belowstandard",
    "from": "ALX",
    "to": "MN",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "MN",
    "to": "ALX",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "ALX",
    "to": "MN",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "MN",
    "to": "ALX",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "ALX",
    "to": "KFS",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "KFS",
    "to": "ALX",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "ALX",
    "to": "KFS",
    "price": 95
  },
  {
    "type": "abovestandard",
    "from": "KFS",
    "to": "ALX",
    "price": 95
  },
  {
    "type": "belowstandard",
    "from": "ALX",
    "to": "MT",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "MT",
    "to": "ALX",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "ALX",
    "to": "MT",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "MT",
    "to": "ALX",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "ALX",
    "to": "LX",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "LX",
    "to": "ALX",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "ALX",
    "to": "LX",
    "price": 160
  },
  {
    "type": "abovestandard",
    "from": "LX",
    "to": "ALX",
    "price": 160
  },
  {
    "type": "belowstandard",
    "from": "ALX",
    "to": "KN",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "KN",
    "to": "ALX",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "ALX",
    "to": "KN",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "KN",
    "to": "ALX",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "ALX",
    "to": "SHG",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "SHG",
    "to": "ALX",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "ALX",
    "to": "SHG",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "SHG",
    "to": "ALX",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "ALX",
    "to": "OCT",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "OCT",
    "to": "ALX",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "ALX",
    "to": "OCT",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "OCT",
    "to": "ALX",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "ALX",
    "to": "BA",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "BA",
    "to": "ALX",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "ALX",
    "to": "BA",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "BA",
    "to": "ALX",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "ALX",
    "to": "JS",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "JS",
    "to": "ALX",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "ALX",
    "to": "JS",
    "price": 190
  },
  {
    "type": "abovestandard",
    "from": "JS",
    "to": "ALX",
    "price": 190
  },
  {
    "type": "belowstandard",
    "from": "SUZ",
    "to": "SUZ",
    "price": 60
  },
  {
    "type": "abovestandard",
    "from": "SUZ",
    "to": "SUZ",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "SUZ",
    "to": "HLW",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "HLW",
    "to": "SUZ",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "SUZ",
    "to": "HLW",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "HLW",
    "to": "SUZ",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "SUZ",
    "to": "GZ",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "GZ",
    "to": "SUZ",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "SUZ",
    "to": "GZ",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "GZ",
    "to": "SUZ",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "SUZ",
    "to": "ASN",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "ASN",
    "to": "SUZ",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "SUZ",
    "to": "ASN",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "ASN",
    "to": "SUZ",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "SUZ",
    "to": "AST",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "AST",
    "to": "SUZ",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "SUZ",
    "to": "AST",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "AST",
    "to": "SUZ",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "SUZ",
    "to": "BNS",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "BNS",
    "to": "SUZ",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "SUZ",
    "to": "BNS",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "BNS",
    "to": "SUZ",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "SUZ",
    "to": "IS",
    "price": 60
  },
  {
    "type": "belowstandard",
    "from": "IS",
    "to": "SUZ",
    "price": 60
  },
  {
    "type": "abovestandard",
    "from": "SUZ",
    "to": "IS",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "IS",
    "to": "SUZ",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "SUZ",
    "to": "FYM",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "FYM",
    "to": "SUZ",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "SUZ",
    "to": "FYM",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "FYM",
    "to": "SUZ",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "SUZ",
    "to": "PTS",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "PTS",
    "to": "SUZ",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "SUZ",
    "to": "PTS",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "PTS",
    "to": "SUZ",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "SUZ",
    "to": "DT",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "DT",
    "to": "SUZ",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "SUZ",
    "to": "DT",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "DT",
    "to": "SUZ",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "SUZ",
    "to": "GH",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "GH",
    "to": "SUZ",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "SUZ",
    "to": "GH",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "GH",
    "to": "SUZ",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "SUZ",
    "to": "MNF",
    "price": 95
  },
  {
    "type": "belowstandard",
    "from": "MNF",
    "to": "SUZ",
    "price": 95
  },
  {
    "type": "abovestandard",
    "from": "SUZ",
    "to": "MNF",
    "price": 115
  },
  {
    "type": "abovestandard",
    "from": "MNF",
    "to": "SUZ",
    "price": 115
  },
  {
    "type": "belowstandard",
    "from": "SUZ",
    "to": "WAD",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "WAD",
    "to": "SUZ",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "SUZ",
    "to": "WAD",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "WAD",
    "to": "SUZ",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "SUZ",
    "to": "BH",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "BH",
    "to": "SUZ",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "SUZ",
    "to": "BH",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "BH",
    "to": "SUZ",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "SUZ",
    "to": "MN",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "MN",
    "to": "SUZ",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "SUZ",
    "to": "MN",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "MN",
    "to": "SUZ",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "SUZ",
    "to": "KFS",
    "price": 95
  },
  {
    "type": "belowstandard",
    "from": "KFS",
    "to": "SUZ",
    "price": 95
  },
  {
    "type": "abovestandard",
    "from": "SUZ",
    "to": "KFS",
    "price": 115
  },
  {
    "type": "abovestandard",
    "from": "KFS",
    "to": "SUZ",
    "price": 115
  },
  {
    "type": "belowstandard",
    "from": "SUZ",
    "to": "MT",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "MT",
    "to": "SUZ",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "SUZ",
    "to": "MT",
    "price": 160
  },
  {
    "type": "abovestandard",
    "from": "MT",
    "to": "SUZ",
    "price": 160
  },
  {
    "type": "belowstandard",
    "from": "SUZ",
    "to": "LX",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "LX",
    "to": "SUZ",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "SUZ",
    "to": "LX",
    "price": 160
  },
  {
    "type": "abovestandard",
    "from": "LX",
    "to": "SUZ",
    "price": 160
  },
  {
    "type": "belowstandard",
    "from": "SUZ",
    "to": "KN",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "KN",
    "to": "SUZ",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "SUZ",
    "to": "KN",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "KN",
    "to": "SUZ",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "SUZ",
    "to": "SHG",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "SHG",
    "to": "SUZ",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "SUZ",
    "to": "SHG",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "SHG",
    "to": "SUZ",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "SUZ",
    "to": "OCT",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "OCT",
    "to": "SUZ",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "SUZ",
    "to": "OCT",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "OCT",
    "to": "SUZ",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "SUZ",
    "to": "BA",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "BA",
    "to": "SUZ",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "SUZ",
    "to": "BA",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "BA",
    "to": "SUZ",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "SUZ",
    "to": "JS",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "JS",
    "to": "SUZ",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "SUZ",
    "to": "JS",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "JS",
    "to": "SUZ",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "ASN",
    "to": "ASN",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "ASN",
    "to": "ASN",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "ASN",
    "to": "HLW",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "HLW",
    "to": "ASN",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "ASN",
    "to": "HLW",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "HLW",
    "to": "ASN",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "ASN",
    "to": "GZ",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "GZ",
    "to": "ASN",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "ASN",
    "to": "GZ",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "GZ",
    "to": "ASN",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "ASN",
    "to": "AST",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "AST",
    "to": "ASN",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "ASN",
    "to": "AST",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "AST",
    "to": "ASN",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "ASN",
    "to": "BNS",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "BNS",
    "to": "ASN",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "ASN",
    "to": "BNS",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "BNS",
    "to": "ASN",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "ASN",
    "to": "IS",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "IS",
    "to": "ASN",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "ASN",
    "to": "IS",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "IS",
    "to": "ASN",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "ASN",
    "to": "FYM",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "FYM",
    "to": "ASN",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "ASN",
    "to": "FYM",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "FYM",
    "to": "ASN",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "ASN",
    "to": "PTS",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "PTS",
    "to": "ASN",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "ASN",
    "to": "PTS",
    "price": 190
  },
  {
    "type": "abovestandard",
    "from": "PTS",
    "to": "ASN",
    "price": 190
  },
  {
    "type": "belowstandard",
    "from": "ASN",
    "to": "DT",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "DT",
    "to": "ASN",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "ASN",
    "to": "DT",
    "price": 190
  },
  {
    "type": "abovestandard",
    "from": "DT",
    "to": "ASN",
    "price": 190
  },
  {
    "type": "belowstandard",
    "from": "ASN",
    "to": "GH",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "GH",
    "to": "ASN",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "ASN",
    "to": "GH",
    "price": 180
  },
  {
    "type": "abovestandard",
    "from": "GH",
    "to": "ASN",
    "price": 180
  },
  {
    "type": "belowstandard",
    "from": "ASN",
    "to": "MNF",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "MNF",
    "to": "ASN",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "ASN",
    "to": "MNF",
    "price": 180
  },
  {
    "type": "abovestandard",
    "from": "MNF",
    "to": "ASN",
    "price": 180
  },
  {
    "type": "belowstandard",
    "from": "ASN",
    "to": "WAD",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "WAD",
    "to": "ASN",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "ASN",
    "to": "WAD",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "WAD",
    "to": "ASN",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "ASN",
    "to": "BH",
    "price": 160
  },
  {
    "type": "belowstandard",
    "from": "BH",
    "to": "ASN",
    "price": 160
  },
  {
    "type": "abovestandard",
    "from": "ASN",
    "to": "BH",
    "price": 200
  },
  {
    "type": "abovestandard",
    "from": "BH",
    "to": "ASN",
    "price": 200
  },
  {
    "type": "belowstandard",
    "from": "ASN",
    "to": "MN",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "MN",
    "to": "ASN",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "ASN",
    "to": "MN",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "MN",
    "to": "ASN",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "ASN",
    "to": "KFS",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "KFS",
    "to": "ASN",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "ASN",
    "to": "KFS",
    "price": 200
  },
  {
    "type": "abovestandard",
    "from": "KFS",
    "to": "ASN",
    "price": 200
  },
  {
    "type": "belowstandard",
    "from": "ASN",
    "to": "MT",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "MT",
    "to": "ASN",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "ASN",
    "to": "MT",
    "price": 180
  },
  {
    "type": "abovestandard",
    "from": "MT",
    "to": "ASN",
    "price": 180
  },
  {
    "type": "belowstandard",
    "from": "ASN",
    "to": "LX",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "LX",
    "to": "ASN",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "ASN",
    "to": "LX",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "LX",
    "to": "ASN",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "ASN",
    "to": "KN",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "KN",
    "to": "ASN",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "ASN",
    "to": "KN",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "KN",
    "to": "ASN",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "ASN",
    "to": "SHG",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "SHG",
    "to": "ASN",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "ASN",
    "to": "SHG",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "SHG",
    "to": "ASN",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "ASN",
    "to": "OCT",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "OCT",
    "to": "ASN",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "ASN",
    "to": "OCT",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "OCT",
    "to": "ASN",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "ASN",
    "to": "BA",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "BA",
    "to": "ASN",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "ASN",
    "to": "BA",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "BA",
    "to": "ASN",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "ASN",
    "to": "JS",
    "price": 220
  },
  {
    "type": "belowstandard",
    "from": "JS",
    "to": "ASN",
    "price": 220
  },
  {
    "type": "abovestandard",
    "from": "ASN",
    "to": "JS",
    "price": 270
  },
  {
    "type": "abovestandard",
    "from": "JS",
    "to": "ASN",
    "price": 270
  },
  {
    "type": "belowstandard",
    "from": "AST",
    "to": "AST",
    "price": 60
  },
  {
    "type": "abovestandard",
    "from": "AST",
    "to": "AST",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "AST",
    "to": "HLW",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "HLW",
    "to": "AST",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "AST",
    "to": "HLW",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "HLW",
    "to": "AST",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "AST",
    "to": "GZ",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "GZ",
    "to": "AST",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "AST",
    "to": "GZ",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "GZ",
    "to": "AST",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "AST",
    "to": "BNS",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "BNS",
    "to": "AST",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "AST",
    "to": "BNS",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "BNS",
    "to": "AST",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "AST",
    "to": "IS",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "IS",
    "to": "AST",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "AST",
    "to": "IS",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "IS",
    "to": "AST",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "AST",
    "to": "FYM",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "FYM",
    "to": "AST",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "AST",
    "to": "FYM",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "FYM",
    "to": "AST",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "AST",
    "to": "PTS",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "PTS",
    "to": "AST",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "AST",
    "to": "PTS",
    "price": 160
  },
  {
    "type": "abovestandard",
    "from": "PTS",
    "to": "AST",
    "price": 160
  },
  {
    "type": "belowstandard",
    "from": "AST",
    "to": "DT",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "DT",
    "to": "AST",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "AST",
    "to": "DT",
    "price": 180
  },
  {
    "type": "abovestandard",
    "from": "DT",
    "to": "AST",
    "price": 180
  },
  {
    "type": "belowstandard",
    "from": "AST",
    "to": "GH",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "GH",
    "to": "AST",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "AST",
    "to": "GH",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "GH",
    "to": "AST",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "AST",
    "to": "MNF",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "MNF",
    "to": "AST",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "AST",
    "to": "MNF",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "MNF",
    "to": "AST",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "AST",
    "to": "WAD",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "WAD",
    "to": "AST",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "AST",
    "to": "WAD",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "WAD",
    "to": "AST",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "AST",
    "to": "BH",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "BH",
    "to": "AST",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "AST",
    "to": "BH",
    "price": 180
  },
  {
    "type": "abovestandard",
    "from": "BH",
    "to": "AST",
    "price": 180
  },
  {
    "type": "belowstandard",
    "from": "AST",
    "to": "MN",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "MN",
    "to": "AST",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "AST",
    "to": "MN",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "MN",
    "to": "AST",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "AST",
    "to": "KFS",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "KFS",
    "to": "AST",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "AST",
    "to": "KFS",
    "price": 180
  },
  {
    "type": "abovestandard",
    "from": "KFS",
    "to": "AST",
    "price": 180
  },
  {
    "type": "belowstandard",
    "from": "AST",
    "to": "MT",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "MT",
    "to": "AST",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "AST",
    "to": "MT",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "MT",
    "to": "AST",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "AST",
    "to": "LX",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "LX",
    "to": "AST",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "AST",
    "to": "LX",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "LX",
    "to": "AST",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "AST",
    "to": "KN",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "KN",
    "to": "AST",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "AST",
    "to": "KN",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "KN",
    "to": "AST",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "AST",
    "to": "SHG",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "SHG",
    "to": "AST",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "AST",
    "to": "SHG",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "SHG",
    "to": "AST",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "AST",
    "to": "OCT",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "OCT",
    "to": "AST",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "AST",
    "to": "OCT",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "OCT",
    "to": "AST",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "AST",
    "to": "BA",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "BA",
    "to": "AST",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "AST",
    "to": "BA",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "BA",
    "to": "AST",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "AST",
    "to": "JS",
    "price": 190
  },
  {
    "type": "belowstandard",
    "from": "JS",
    "to": "AST",
    "price": 190
  },
  {
    "type": "abovestandard",
    "from": "AST",
    "to": "JS",
    "price": 220
  },
  {
    "type": "abovestandard",
    "from": "JS",
    "to": "AST",
    "price": 220
  },
  {
    "type": "belowstandard",
    "from": "BNS",
    "to": "BNS",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "BNS",
    "to": "BNS",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "BNS",
    "to": "HLW",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "HLW",
    "to": "BNS",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "BNS",
    "to": "HLW",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "HLW",
    "to": "BNS",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "BNS",
    "to": "GZ",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "GZ",
    "to": "BNS",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "BNS",
    "to": "GZ",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "GZ",
    "to": "BNS",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "BNS",
    "to": "IS",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "IS",
    "to": "BNS",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "BNS",
    "to": "IS",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "IS",
    "to": "BNS",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "BNS",
    "to": "FYM",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "FYM",
    "to": "BNS",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "BNS",
    "to": "FYM",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "FYM",
    "to": "BNS",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "BNS",
    "to": "PTS",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "PTS",
    "to": "BNS",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "BNS",
    "to": "PTS",
    "price": 160
  },
  {
    "type": "abovestandard",
    "from": "PTS",
    "to": "BNS",
    "price": 160
  },
  {
    "type": "belowstandard",
    "from": "BNS",
    "to": "DT",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "DT",
    "to": "BNS",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "BNS",
    "to": "DT",
    "price": 160
  },
  {
    "type": "abovestandard",
    "from": "DT",
    "to": "BNS",
    "price": 160
  },
  {
    "type": "belowstandard",
    "from": "BNS",
    "to": "GH",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "GH",
    "to": "BNS",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "BNS",
    "to": "GH",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "GH",
    "to": "BNS",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "BNS",
    "to": "MNF",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "MNF",
    "to": "BNS",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "BNS",
    "to": "MNF",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "MNF",
    "to": "BNS",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "BNS",
    "to": "WAD",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "WAD",
    "to": "BNS",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "BNS",
    "to": "WAD",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "WAD",
    "to": "BNS",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "BNS",
    "to": "BH",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "BH",
    "to": "BNS",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "BNS",
    "to": "BH",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "BH",
    "to": "BNS",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "BNS",
    "to": "MN",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "MN",
    "to": "BNS",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "BNS",
    "to": "MN",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "MN",
    "to": "BNS",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "BNS",
    "to": "KFS",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "KFS",
    "to": "BNS",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "BNS",
    "to": "KFS",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "KFS",
    "to": "BNS",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "BNS",
    "to": "MT",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "MT",
    "to": "BNS",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "BNS",
    "to": "MT",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "MT",
    "to": "BNS",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "BNS",
    "to": "LX",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "LX",
    "to": "BNS",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "BNS",
    "to": "LX",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "LX",
    "to": "BNS",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "BNS",
    "to": "KN",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "KN",
    "to": "BNS",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "BNS",
    "to": "KN",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "KN",
    "to": "BNS",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "BNS",
    "to": "SHG",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "SHG",
    "to": "BNS",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "BNS",
    "to": "SHG",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "SHG",
    "to": "BNS",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "BNS",
    "to": "OCT",
    "price": 60
  },
  {
    "type": "belowstandard",
    "from": "OCT",
    "to": "BNS",
    "price": 60
  },
  {
    "type": "abovestandard",
    "from": "BNS",
    "to": "OCT",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "OCT",
    "to": "BNS",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "BNS",
    "to": "BA",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "BA",
    "to": "BNS",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "BNS",
    "to": "BA",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "BA",
    "to": "BNS",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "BNS",
    "to": "JS",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "JS",
    "to": "BNS",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "BNS",
    "to": "JS",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "JS",
    "to": "BNS",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "IS",
    "to": "IS",
    "price": 60
  },
  {
    "type": "abovestandard",
    "from": "IS",
    "to": "IS",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "IS",
    "to": "HLW",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "HLW",
    "to": "IS",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "IS",
    "to": "HLW",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "HLW",
    "to": "IS",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "IS",
    "to": "GZ",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "GZ",
    "to": "IS",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "IS",
    "to": "GZ",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "GZ",
    "to": "IS",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "IS",
    "to": "FYM",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "FYM",
    "to": "IS",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "IS",
    "to": "FYM",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "FYM",
    "to": "IS",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "IS",
    "to": "PTS",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "PTS",
    "to": "IS",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "IS",
    "to": "PTS",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "PTS",
    "to": "IS",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "IS",
    "to": "DT",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "DT",
    "to": "IS",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "IS",
    "to": "DT",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "DT",
    "to": "IS",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "IS",
    "to": "GH",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "GH",
    "to": "IS",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "IS",
    "to": "GH",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "GH",
    "to": "IS",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "IS",
    "to": "MNF",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "MNF",
    "to": "IS",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "IS",
    "to": "MNF",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "MNF",
    "to": "IS",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "IS",
    "to": "WAD",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "WAD",
    "to": "IS",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "IS",
    "to": "WAD",
    "price": 220
  },
  {
    "type": "abovestandard",
    "from": "WAD",
    "to": "IS",
    "price": 220
  },
  {
    "type": "belowstandard",
    "from": "IS",
    "to": "BH",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "BH",
    "to": "IS",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "IS",
    "to": "BH",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "BH",
    "to": "IS",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "IS",
    "to": "MN",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "MN",
    "to": "IS",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "IS",
    "to": "MN",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "MN",
    "to": "IS",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "IS",
    "to": "KFS",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "KFS",
    "to": "IS",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "IS",
    "to": "KFS",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "KFS",
    "to": "IS",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "IS",
    "to": "MT",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "MT",
    "to": "IS",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "IS",
    "to": "MT",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "MT",
    "to": "IS",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "IS",
    "to": "LX",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "LX",
    "to": "IS",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "IS",
    "to": "LX",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "LX",
    "to": "IS",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "IS",
    "to": "KN",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "KN",
    "to": "IS",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "IS",
    "to": "KN",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "KN",
    "to": "IS",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "IS",
    "to": "SHG",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "SHG",
    "to": "IS",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "IS",
    "to": "SHG",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "SHG",
    "to": "IS",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "IS",
    "to": "OCT",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "OCT",
    "to": "IS",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "IS",
    "to": "OCT",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "OCT",
    "to": "IS",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "IS",
    "to": "BA",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "BA",
    "to": "IS",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "IS",
    "to": "BA",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "BA",
    "to": "IS",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "IS",
    "to": "JS",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "JS",
    "to": "IS",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "IS",
    "to": "JS",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "JS",
    "to": "IS",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "FYM",
    "to": "FYM",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "FYM",
    "to": "FYM",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "FYM",
    "to": "HLW",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "HLW",
    "to": "FYM",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "FYM",
    "to": "HLW",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "HLW",
    "to": "FYM",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "FYM",
    "to": "GZ",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "GZ",
    "to": "FYM",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "FYM",
    "to": "GZ",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "GZ",
    "to": "FYM",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "FYM",
    "to": "PTS",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "PTS",
    "to": "FYM",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "FYM",
    "to": "PTS",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "PTS",
    "to": "FYM",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "FYM",
    "to": "DT",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "DT",
    "to": "FYM",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "FYM",
    "to": "DT",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "DT",
    "to": "FYM",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "FYM",
    "to": "GH",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "GH",
    "to": "FYM",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "FYM",
    "to": "GH",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "GH",
    "to": "FYM",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "FYM",
    "to": "MNF",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "MNF",
    "to": "FYM",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "FYM",
    "to": "MNF",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "MNF",
    "to": "FYM",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "FYM",
    "to": "WAD",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "WAD",
    "to": "FYM",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "FYM",
    "to": "WAD",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "WAD",
    "to": "FYM",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "FYM",
    "to": "BH",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "BH",
    "to": "FYM",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "FYM",
    "to": "BH",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "BH",
    "to": "FYM",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "FYM",
    "to": "MN",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "MN",
    "to": "FYM",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "FYM",
    "to": "MN",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "MN",
    "to": "FYM",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "FYM",
    "to": "KFS",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "KFS",
    "to": "FYM",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "FYM",
    "to": "KFS",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "KFS",
    "to": "FYM",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "FYM",
    "to": "MT",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "MT",
    "to": "FYM",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "FYM",
    "to": "MT",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "MT",
    "to": "FYM",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "FYM",
    "to": "LX",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "LX",
    "to": "FYM",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "FYM",
    "to": "LX",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "LX",
    "to": "FYM",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "FYM",
    "to": "KN",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "KN",
    "to": "FYM",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "FYM",
    "to": "KN",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "KN",
    "to": "FYM",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "FYM",
    "to": "SHG",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "SHG",
    "to": "FYM",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "FYM",
    "to": "SHG",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "SHG",
    "to": "FYM",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "FYM",
    "to": "OCT",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "OCT",
    "to": "FYM",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "FYM",
    "to": "OCT",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "OCT",
    "to": "FYM",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "FYM",
    "to": "BA",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "BA",
    "to": "FYM",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "FYM",
    "to": "BA",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "BA",
    "to": "FYM",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "FYM",
    "to": "JS",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "JS",
    "to": "FYM",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "FYM",
    "to": "JS",
    "price": 220
  },
  {
    "type": "abovestandard",
    "from": "JS",
    "to": "FYM",
    "price": 220
  },
  {
    "type": "belowstandard",
    "from": "PTS",
    "to": "PTS",
    "price": 60
  },
  {
    "type": "abovestandard",
    "from": "PTS",
    "to": "PTS",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "PTS",
    "to": "HLW",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "HLW",
    "to": "PTS",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "PTS",
    "to": "HLW",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "HLW",
    "to": "PTS",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "PTS",
    "to": "GZ",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "GZ",
    "to": "PTS",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "PTS",
    "to": "GZ",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "GZ",
    "to": "PTS",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "PTS",
    "to": "DT",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "DT",
    "to": "PTS",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "PTS",
    "to": "DT",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "DT",
    "to": "PTS",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "PTS",
    "to": "GH",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "GH",
    "to": "PTS",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "PTS",
    "to": "GH",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "GH",
    "to": "PTS",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "PTS",
    "to": "MNF",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "MNF",
    "to": "PTS",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "PTS",
    "to": "MNF",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "MNF",
    "to": "PTS",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "PTS",
    "to": "WAD",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "WAD",
    "to": "PTS",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "PTS",
    "to": "WAD",
    "price": 220
  },
  {
    "type": "abovestandard",
    "from": "WAD",
    "to": "PTS",
    "price": 220
  },
  {
    "type": "belowstandard",
    "from": "PTS",
    "to": "BH",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "BH",
    "to": "PTS",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "PTS",
    "to": "BH",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "BH",
    "to": "PTS",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "PTS",
    "to": "MN",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "MN",
    "to": "PTS",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "PTS",
    "to": "MN",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "MN",
    "to": "PTS",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "PTS",
    "to": "KFS",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "KFS",
    "to": "PTS",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "PTS",
    "to": "KFS",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "KFS",
    "to": "PTS",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "PTS",
    "to": "MT",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "MT",
    "to": "PTS",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "PTS",
    "to": "MT",
    "price": 190
  },
  {
    "type": "abovestandard",
    "from": "MT",
    "to": "PTS",
    "price": 190
  },
  {
    "type": "belowstandard",
    "from": "PTS",
    "to": "LX",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "LX",
    "to": "PTS",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "PTS",
    "to": "LX",
    "price": 160
  },
  {
    "type": "abovestandard",
    "from": "LX",
    "to": "PTS",
    "price": 160
  },
  {
    "type": "abovestandard",
    "from": "PTS",
    "to": "KN",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "KN",
    "to": "PTS",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "PTS",
    "to": "KN",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "KN",
    "to": "PTS",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "PTS",
    "to": "SHG",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "SHG",
    "to": "PTS",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "PTS",
    "to": "SHG",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "SHG",
    "to": "PTS",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "PTS",
    "to": "OCT",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "OCT",
    "to": "PTS",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "PTS",
    "to": "OCT",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "OCT",
    "to": "PTS",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "PTS",
    "to": "BA",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "BA",
    "to": "PTS",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "PTS",
    "to": "BA",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "BA",
    "to": "PTS",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "PTS",
    "to": "JS",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "JS",
    "to": "PTS",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "PTS",
    "to": "JS",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "JS",
    "to": "PTS",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "WAD",
    "to": "WAD",
    "price": 60
  },
  {
    "type": "abovestandard",
    "from": "WAD",
    "to": "WAD",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "WAD",
    "to": "HLW",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "HLW",
    "to": "WAD",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "WAD",
    "to": "HLW",
    "price": 160
  },
  {
    "type": "abovestandard",
    "from": "HLW",
    "to": "WAD",
    "price": 160
  },
  {
    "type": "belowstandard",
    "from": "WAD",
    "to": "DT",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "DT",
    "to": "WAD",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "WAD",
    "to": "DT",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "DT",
    "to": "WAD",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "WAD",
    "to": "GH",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "GH",
    "to": "WAD",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "WAD",
    "to": "GH",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "GH",
    "to": "WAD",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "WAD",
    "to": "GZ",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "GZ",
    "to": "WAD",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "WAD",
    "to": "GZ",
    "price": 160
  },
  {
    "type": "abovestandard",
    "from": "GZ",
    "to": "WAD",
    "price": 160
  },
  {
    "type": "belowstandard",
    "from": "WAD",
    "to": "MNF",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "MNF",
    "to": "WAD",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "WAD",
    "to": "MNF",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "MNF",
    "to": "WAD",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "WAD",
    "to": "BH",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "BH",
    "to": "WAD",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "WAD",
    "to": "BH",
    "price": 160
  },
  {
    "type": "abovestandard",
    "from": "BH",
    "to": "WAD",
    "price": 160
  },
  {
    "type": "belowstandard",
    "from": "WAD",
    "to": "MN",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "MN",
    "to": "WAD",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "WAD",
    "to": "MN",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "MN",
    "to": "WAD",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "WAD",
    "to": "KFS",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "KFS",
    "to": "WAD",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "WAD",
    "to": "KFS",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "KFS",
    "to": "WAD",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "WAD",
    "to": "MT",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "MT",
    "to": "WAD",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "WAD",
    "to": "MT",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "MT",
    "to": "WAD",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "WAD",
    "to": "LX",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "LX",
    "to": "WAD",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "WAD",
    "to": "LX",
    "price": 160
  },
  {
    "type": "abovestandard",
    "from": "LX",
    "to": "WAD",
    "price": 160
  },
  {
    "type": "belowstandard",
    "from": "WAD",
    "to": "KN",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "KN",
    "to": "WAD",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "WAD",
    "to": "KN",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "KN",
    "to": "WAD",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "WAD",
    "to": "SHG",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "SHG",
    "to": "WAD",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "WAD",
    "to": "SHG",
    "price": 160
  },
  {
    "type": "abovestandard",
    "from": "SHG",
    "to": "WAD",
    "price": 160
  },
  {
    "type": "belowstandard",
    "from": "WAD",
    "to": "OCT",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "OCT",
    "to": "WAD",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "WAD",
    "to": "OCT",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "OCT",
    "to": "WAD",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "WAD",
    "to": "BA",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "BA",
    "to": "WAD",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "WAD",
    "to": "BA",
    "price": 220
  },
  {
    "type": "abovestandard",
    "from": "BA",
    "to": "WAD",
    "price": 220
  },
  {
    "type": "belowstandard",
    "from": "WAD",
    "to": "JS",
    "price": 220
  },
  {
    "type": "belowstandard",
    "from": "JS",
    "to": "WAD",
    "price": 220
  },
  {
    "type": "abovestandard",
    "from": "WAD",
    "to": "JS",
    "price": 270
  },
  {
    "type": "abovestandard",
    "from": "JS",
    "to": "WAD",
    "price": 270
  },
  {
    "type": "belowstandard",
    "from": "GZ",
    "to": "GZ",
    "price": 60
  },
  {
    "type": "abovestandard",
    "from": "GZ",
    "to": "GZ",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "GZ",
    "to": "HLW",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "HLW",
    "to": "GZ",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "GZ",
    "to": "HLW",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "HLW",
    "to": "GZ",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "GZ",
    "to": "DT",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "DT",
    "to": "GZ",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "GZ",
    "to": "DT",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "DT",
    "to": "GZ",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "GZ",
    "to": "MNF",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "MNF",
    "to": "GZ",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "GZ",
    "to": "MNF",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "MNF",
    "to": "GZ",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "GZ",
    "to": "BH",
    "price": 85
  },
  {
    "type": "belowstandard",
    "from": "BH",
    "to": "GZ",
    "price": 85
  },
  {
    "type": "abovestandard",
    "from": "GZ",
    "to": "BH",
    "price": 105
  },
  {
    "type": "abovestandard",
    "from": "BH",
    "to": "GZ",
    "price": 105
  },
  {
    "type": "belowstandard",
    "from": "GZ",
    "to": "KFS",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "KFS",
    "to": "GZ",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "GZ",
    "to": "KFS",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "KFS",
    "to": "GZ",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "GZ",
    "to": "MT",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "MT",
    "to": "GZ",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "GZ",
    "to": "MT",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "MT",
    "to": "GZ",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "GZ",
    "to": "LX",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "LX",
    "to": "GZ",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "GZ",
    "to": "LX",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "LX",
    "to": "GZ",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "GZ",
    "to": "KN",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "KN",
    "to": "GZ",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "GZ",
    "to": "KN",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "KN",
    "to": "GZ",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "GZ",
    "to": "SHG",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "SHG",
    "to": "GZ",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "GZ",
    "to": "SHG",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "SHG",
    "to": "GZ",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "GZ",
    "to": "OCT",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "OCT",
    "to": "GZ",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "GZ",
    "to": "OCT",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "OCT",
    "to": "GZ",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "GZ",
    "to": "BA",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "BA",
    "to": "GZ",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "GZ",
    "to": "BA",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "BA",
    "to": "GZ",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "GZ",
    "to": "JS",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "JS",
    "to": "GZ",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "GZ",
    "to": "JS",
    "price": 160
  },
  {
    "type": "abovestandard",
    "from": "JS",
    "to": "GZ",
    "price": 160
  },
  {
    "type": "belowstandard",
    "from": "BH",
    "to": "BH",
    "price": 65
  },
  {
    "type": "abovestandard",
    "from": "BH",
    "to": "BH",
    "price": 85
  },
  {
    "type": "belowstandard",
    "from": "BH",
    "to": "HLW",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "HLW",
    "to": "BH",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "BH",
    "to": "HLW",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "HLW",
    "to": "BH",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "BH",
    "to": "DT",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "DT",
    "to": "BH",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "BH",
    "to": "DT",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "DT",
    "to": "BH",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "BH",
    "to": "MN",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "MN",
    "to": "BH",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "BH",
    "to": "MN",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "MN",
    "to": "BH",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "BH",
    "to": "KFS",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "KFS",
    "to": "BH",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "BH",
    "to": "KFS",
    "price": 95
  },
  {
    "type": "abovestandard",
    "from": "KFS",
    "to": "BH",
    "price": 95
  },
  {
    "type": "belowstandard",
    "from": "BH",
    "to": "MT",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "MT",
    "to": "BH",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "BH",
    "to": "MT",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "MT",
    "to": "BH",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "BH",
    "to": "LX",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "LX",
    "to": "BH",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "BH",
    "to": "LX",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "LX",
    "to": "BH",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "BH",
    "to": "KN",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "KN",
    "to": "BH",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "BH",
    "to": "KN",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "KN",
    "to": "BH",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "BH",
    "to": "SHG",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "SHG",
    "to": "BH",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "BH",
    "to": "SHG",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "SHG",
    "to": "BH",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "BH",
    "to": "OCT",
    "price": 75
  },
  {
    "type": "belowstandard",
    "from": "OCT",
    "to": "BH",
    "price": 75
  },
  {
    "type": "abovestandard",
    "from": "BH",
    "to": "OCT",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "OCT",
    "to": "BH",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "BH",
    "to": "BA",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "BA",
    "to": "BH",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "BH",
    "to": "BA",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "BA",
    "to": "BH",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "BH",
    "to": "JS",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "JS",
    "to": "BH",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "BH",
    "to": "JS",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "JS",
    "to": "BH",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "MN",
    "to": "MN",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "MN",
    "to": "MN",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "MN",
    "to": "HLW",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "HLW",
    "to": "MN",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "MN",
    "to": "HLW",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "HLW",
    "to": "MN",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "MN",
    "to": "DT",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "DT",
    "to": "MN",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "MN",
    "to": "DT",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "DT",
    "to": "MN",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "MN",
    "to": "GZ",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "GZ",
    "to": "MN",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "MN",
    "to": "GZ",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "GZ",
    "to": "MN",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "MN",
    "to": "MNF",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "MNF",
    "to": "MN",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "MN",
    "to": "MNF",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "MNF",
    "to": "MN",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "MN",
    "to": "GH",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "GH",
    "to": "MN",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "MN",
    "to": "GH",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "GH",
    "to": "MN",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "MN",
    "to": "KFS",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "KFS",
    "to": "MN",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "MN",
    "to": "KFS",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "KFS",
    "to": "MN",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "MN",
    "to": "MT",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "MT",
    "to": "MN",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "MN",
    "to": "MT",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "MT",
    "to": "MN",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "MN",
    "to": "LX",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "LX",
    "to": "MN",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "MN",
    "to": "LX",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "LX",
    "to": "MN",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "MN",
    "to": "KN",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "KN",
    "to": "MN",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "MN",
    "to": "KN",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "KN",
    "to": "MN",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "MN",
    "to": "SHG",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "SHG",
    "to": "MN",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "MN",
    "to": "SHG",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "SHG",
    "to": "MN",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "MN",
    "to": "OCT",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "OCT",
    "to": "MN",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "MN",
    "to": "OCT",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "OCT",
    "to": "MN",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "MN",
    "to": "BA",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "BA",
    "to": "MN",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "MN",
    "to": "BA",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "BA",
    "to": "MN",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "MN",
    "to": "JS",
    "price": 190
  },
  {
    "type": "belowstandard",
    "from": "JS",
    "to": "MN",
    "price": 190
  },
  {
    "type": "abovestandard",
    "from": "MN",
    "to": "JS",
    "price": 250
  },
  {
    "type": "abovestandard",
    "from": "JS",
    "to": "MN",
    "price": 250
  },
  {
    "type": "belowstandard",
    "from": "GH",
    "to": "GH",
    "price": 65
  },
  {
    "type": "abovestandard",
    "from": "GH",
    "to": "GH",
    "price": 85
  },
  {
    "type": "belowstandard",
    "from": "GH",
    "to": "HLW",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "HLW",
    "to": "GH",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "GH",
    "to": "HLW",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "HLW",
    "to": "GH",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "GH",
    "to": "DT",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "DT",
    "to": "GH",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "GH",
    "to": "DT",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "DT",
    "to": "GH",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "GH",
    "to": "BH",
    "price": 75
  },
  {
    "type": "belowstandard",
    "from": "BH",
    "to": "GH",
    "price": 75
  },
  {
    "type": "abovestandard",
    "from": "GH",
    "to": "BH",
    "price": 95
  },
  {
    "type": "abovestandard",
    "from": "BH",
    "to": "GH",
    "price": 95
  },
  {
    "type": "belowstandard",
    "from": "GH",
    "to": "GZ",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "GZ",
    "to": "GH",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "GH",
    "to": "GZ",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "GZ",
    "to": "GH",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "GH",
    "to": "MNF",
    "price": 75
  },
  {
    "type": "belowstandard",
    "from": "MNF",
    "to": "GH",
    "price": 75
  },
  {
    "type": "abovestandard",
    "from": "GH",
    "to": "MNF",
    "price": 95
  },
  {
    "type": "abovestandard",
    "from": "MNF",
    "to": "GH",
    "price": 95
  },
  {
    "type": "belowstandard",
    "from": "GH",
    "to": "KFS",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "KFS",
    "to": "GH",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "GH",
    "to": "KFS",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "KFS",
    "to": "GH",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "GH",
    "to": "MT",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "MT",
    "to": "GH",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "GH",
    "to": "MT",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "MT",
    "to": "GH",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "GH",
    "to": "LX",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "LX",
    "to": "GH",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "GH",
    "to": "LX",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "LX",
    "to": "GH",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "GH",
    "to": "KN",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "KN",
    "to": "GH",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "GH",
    "to": "KN",
    "price": 160
  },
  {
    "type": "abovestandard",
    "from": "KN",
    "to": "GH",
    "price": 160
  },
  {
    "type": "belowstandard",
    "from": "GH",
    "to": "SHG",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "SHG",
    "to": "GH",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "GH",
    "to": "SHG",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "SHG",
    "to": "GH",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "GH",
    "to": "OCT",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "OCT",
    "to": "GH",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "GH",
    "to": "OCT",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "OCT",
    "to": "GH",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "GH",
    "to": "BA",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "BA",
    "to": "GH",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "GH",
    "to": "BA",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "BA",
    "to": "GH",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "GH",
    "to": "JS",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "JS",
    "to": "GH",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "GH",
    "to": "JS",
    "price": 220
  },
  {
    "type": "abovestandard",
    "from": "JS",
    "to": "GH",
    "price": 220
  },
  {
    "type": "belowstandard",
    "from": "MNF",
    "to": "MNF",
    "price": 60
  },
  {
    "type": "abovestandard",
    "from": "MNF",
    "to": "MNF",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "MNF",
    "to": "HLW",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "HLW",
    "to": "MNF",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "MNF",
    "to": "HLW",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "HLW",
    "to": "MNF",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "MNF",
    "to": "BH",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "BH",
    "to": "MNF",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "MNF",
    "to": "BH",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "BH",
    "to": "MNF",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "MNF",
    "to": "MT",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "MT",
    "to": "MNF",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "MNF",
    "to": "MT",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "MT",
    "to": "MNF",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "MNF",
    "to": "OCT",
    "price": 75
  },
  {
    "type": "belowstandard",
    "from": "OCT",
    "to": "MNF",
    "price": 75
  },
  {
    "type": "abovestandard",
    "from": "MNF",
    "to": "OCT",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "OCT",
    "to": "MNF",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "MNF",
    "to": "BA",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "BA",
    "to": "MNF",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "MNF",
    "to": "BA",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "BA",
    "to": "MNF",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "MNF",
    "to": "JS",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "JS",
    "to": "MNF",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "MNF",
    "to": "JS",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "JS",
    "to": "MNF",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "DT",
    "to": "DT",
    "price": 60
  },
  {
    "type": "abovestandard",
    "from": "DT",
    "to": "DT",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "DT",
    "to": "HLW",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "HLW",
    "to": "DT",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "DT",
    "to": "HLW",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "HLW",
    "to": "DT",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "DT",
    "to": "MNF",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "MNF",
    "to": "DT",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "DT",
    "to": "MNF",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "MNF",
    "to": "DT",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "DT",
    "to": "KFS",
    "price": 85
  },
  {
    "type": "belowstandard",
    "from": "KFS",
    "to": "DT",
    "price": 85
  },
  {
    "type": "abovestandard",
    "from": "DT",
    "to": "KFS",
    "price": 105
  },
  {
    "type": "abovestandard",
    "from": "KFS",
    "to": "DT",
    "price": 105
  },
  {
    "type": "belowstandard",
    "from": "DT",
    "to": "MT",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "MT",
    "to": "DT",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "DT",
    "to": "MT",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "MT",
    "to": "DT",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "DT",
    "to": "LX",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "LX",
    "to": "DT",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "DT",
    "to": "LX",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "LX",
    "to": "DT",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "DT",
    "to": "KN",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "KN",
    "to": "DT",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "DT",
    "to": "KN",
    "price": 160
  },
  {
    "type": "abovestandard",
    "from": "KN",
    "to": "DT",
    "price": 160
  },
  {
    "type": "belowstandard",
    "from": "DT",
    "to": "SHG",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "SHG",
    "to": "DT",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "DT",
    "to": "SHG",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "SHG",
    "to": "DT",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "DT",
    "to": "OCT",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "OCT",
    "to": "DT",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "DT",
    "to": "OCT",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "OCT",
    "to": "DT",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "DT",
    "to": "BA",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "BA",
    "to": "DT",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "DT",
    "to": "BA",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "BA",
    "to": "DT",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "DT",
    "to": "JS",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "JS",
    "to": "DT",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "DT",
    "to": "JS",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "JS",
    "to": "DT",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "MT",
    "to": "MT",
    "price": 60
  },
  {
    "type": "abovestandard",
    "from": "MT",
    "to": "MT",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "MT",
    "to": "HLW",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "HLW",
    "to": "MT",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "MT",
    "to": "HLW",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "HLW",
    "to": "MT",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "MT",
    "to": "KFS",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "KFS",
    "to": "MT",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "MT",
    "to": "KFS",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "KFS",
    "to": "MT",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "MT",
    "to": "LX",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "LX",
    "to": "MT",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "MT",
    "to": "LX",
    "price": 220
  },
  {
    "type": "abovestandard",
    "from": "LX",
    "to": "MT",
    "price": 220
  },
  {
    "type": "belowstandard",
    "from": "MT",
    "to": "KN",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "KN",
    "to": "MT",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "MT",
    "to": "KN",
    "price": 190
  },
  {
    "type": "abovestandard",
    "from": "KN",
    "to": "MT",
    "price": 190
  },
  {
    "type": "belowstandard",
    "from": "MT",
    "to": "SHG",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "SHG",
    "to": "MT",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "MT",
    "to": "SHG",
    "price": 180
  },
  {
    "type": "abovestandard",
    "from": "SHG",
    "to": "MT",
    "price": 180
  },
  {
    "type": "belowstandard",
    "from": "MT",
    "to": "OCT",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "OCT",
    "to": "MT",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "MT",
    "to": "OCT",
    "price": 160
  },
  {
    "type": "abovestandard",
    "from": "OCT",
    "to": "MT",
    "price": 160
  },
  {
    "type": "belowstandard",
    "from": "MT",
    "to": "BA",
    "price": 220
  },
  {
    "type": "belowstandard",
    "from": "BA",
    "to": "MT",
    "price": 220
  },
  {
    "type": "abovestandard",
    "from": "MT",
    "to": "BA",
    "price": 270
  },
  {
    "type": "abovestandard",
    "from": "BA",
    "to": "MT",
    "price": 270
  },
  {
    "type": "belowstandard",
    "from": "MT",
    "to": "JS",
    "price": 270
  },
  {
    "type": "belowstandard",
    "from": "JS",
    "to": "MT",
    "price": 270
  },
  {
    "type": "abovestandard",
    "from": "MT",
    "to": "JS",
    "price": 320
  },
  {
    "type": "abovestandard",
    "from": "JS",
    "to": "MT",
    "price": 320
  },
  {
    "type": "belowstandard",
    "from": "KFS",
    "to": "KFS",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "KFS",
    "to": "KFS",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "KFS",
    "to": "HLW",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "HLW",
    "to": "KFS",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "KFS",
    "to": "HLW",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "HLW",
    "to": "KFS",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "KFS",
    "to": "LX",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "LX",
    "to": "KFS",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "KFS",
    "to": "LX",
    "price": 160
  },
  {
    "type": "abovestandard",
    "from": "LX",
    "to": "KFS",
    "price": 160
  },
  {
    "type": "belowstandard",
    "from": "KFS",
    "to": "KN",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "KN",
    "to": "KFS",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "KFS",
    "to": "KN",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "KN",
    "to": "KFS",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "KFS",
    "to": "SHG",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "SHG",
    "to": "KFS",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "KFS",
    "to": "SHG",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "SHG",
    "to": "KFS",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "KFS",
    "to": "OCT",
    "price": 85
  },
  {
    "type": "belowstandard",
    "from": "OCT",
    "to": "KFS",
    "price": 85
  },
  {
    "type": "abovestandard",
    "from": "KFS",
    "to": "OCT",
    "price": 105
  },
  {
    "type": "abovestandard",
    "from": "OCT",
    "to": "KFS",
    "price": 105
  },
  {
    "type": "belowstandard",
    "from": "KFS",
    "to": "BA",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "BA",
    "to": "KFS",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "KFS",
    "to": "BA",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "BA",
    "to": "KFS",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "KFS",
    "to": "JS",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "JS",
    "to": "KFS",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "KFS",
    "to": "JS",
    "price": 220
  },
  {
    "type": "abovestandard",
    "from": "JS",
    "to": "KFS",
    "price": 220
  },
  {
    "type": "belowstandard",
    "from": "KN",
    "to": "KN",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "KN",
    "to": "KN",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "KN",
    "to": "HLW",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "HLW",
    "to": "KN",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "KN",
    "to": "HLW",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "HLW",
    "to": "KN",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "KN",
    "to": "MNF",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "MNF",
    "to": "KN",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "KN",
    "to": "MNF",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "MNF",
    "to": "KN",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "KN",
    "to": "LX",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "LX",
    "to": "KN",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "KN",
    "to": "LX",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "LX",
    "to": "KN",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "KN",
    "to": "SHG",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "SHG",
    "to": "KN",
    "price": 80
  },
  {
    "type": "abovestandard",
    "from": "KN",
    "to": "SHG",
    "price": 110
  },
  {
    "type": "abovestandard",
    "from": "SHG",
    "to": "KN",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "KN",
    "to": "OCT",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "OCT",
    "to": "KN",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "KN",
    "to": "OCT",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "OCT",
    "to": "KN",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "KN",
    "to": "BA",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "BA",
    "to": "KN",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "KN",
    "to": "BA",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "BA",
    "to": "KN",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "KN",
    "to": "JS",
    "price": 270
  },
  {
    "type": "belowstandard",
    "from": "JS",
    "to": "KN",
    "price": 270
  },
  {
    "type": "abovestandard",
    "from": "KN",
    "to": "JS",
    "price": 320
  },
  {
    "type": "abovestandard",
    "from": "JS",
    "to": "KN",
    "price": 320
  },
  {
    "type": "belowstandard",
    "from": "LX",
    "to": "LX",
    "price": 60
  },
  {
    "type": "abovestandard",
    "from": "LX",
    "to": "LX",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "LX",
    "to": "HLW",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "HLW",
    "to": "LX",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "LX",
    "to": "HLW",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "HLW",
    "to": "LX",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "LX",
    "to": "MNF",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "MNF",
    "to": "LX",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "LX",
    "to": "MNF",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "MNF",
    "to": "LX",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "LX",
    "to": "OCT",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "OCT",
    "to": "LX",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "LX",
    "to": "OCT",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "OCT",
    "to": "LX",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "LX",
    "to": "BA",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "BA",
    "to": "LX",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "LX",
    "to": "BA",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "BA",
    "to": "LX",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "LX",
    "to": "JS",
    "price": 220
  },
  {
    "type": "belowstandard",
    "from": "JS",
    "to": "LX",
    "price": 220
  },
  {
    "type": "abovestandard",
    "from": "LX",
    "to": "JS",
    "price": 270
  },
  {
    "type": "abovestandard",
    "from": "JS",
    "to": "LX",
    "price": 270
  },
  {
    "type": "belowstandard",
    "from": "SHG",
    "to": "SHG",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "SHG",
    "to": "SHG",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "SHG",
    "to": "HLW",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "HLW",
    "to": "SHG",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "SHG",
    "to": "HLW",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "HLW",
    "to": "SHG",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "SHG",
    "to": "MNF",
    "price": 130
  },
  {
    "type": "belowstandard",
    "from": "MNF",
    "to": "SHG",
    "price": 130
  },
  {
    "type": "abovestandard",
    "from": "SHG",
    "to": "MNF",
    "price": 150
  },
  {
    "type": "abovestandard",
    "from": "MNF",
    "to": "SHG",
    "price": 150
  },
  {
    "type": "belowstandard",
    "from": "SHG",
    "to": "LX",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "LX",
    "to": "SHG",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "SHG",
    "to": "LX",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "LX",
    "to": "SHG",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "SHG",
    "to": "OCT",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "OCT",
    "to": "SHG",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "SHG",
    "to": "OCT",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "OCT",
    "to": "SHG",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "SHG",
    "to": "BA",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "BA",
    "to": "SHG",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "SHG",
    "to": "BA",
    "price": 140
  },
  {
    "type": "abovestandard",
    "from": "BA",
    "to": "SHG",
    "price": 140
  },
  {
    "type": "belowstandard",
    "from": "SHG",
    "to": "JS",
    "price": 220
  },
  {
    "type": "belowstandard",
    "from": "JS",
    "to": "SHG",
    "price": 220
  },
  {
    "type": "abovestandard",
    "from": "SHG",
    "to": "JS",
    "price": 270
  },
  {
    "type": "abovestandard",
    "from": "JS",
    "to": "SHG",
    "price": 270
  },
  {
    "type": "belowstandard",
    "from": "BA",
    "to": "BA",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "BA",
    "to": "BA",
    "price": 110
  },
  {
    "type": "belowstandard",
    "from": "BA",
    "to": "JS",
    "price": 170
  },
  {
    "type": "belowstandard",
    "from": "JS",
    "to": "BA",
    "price": 170
  },
  {
    "type": "abovestandard",
    "from": "BA",
    "to": "JS",
    "price": 220
  },
  {
    "type": "abovestandard",
    "from": "JS",
    "to": "BA",
    "price": 220
  },
  {
    "type": "belowstandard",
    "from": "OCT",
    "to": "OCT",
    "price": 60
  },
  {
    "type": "abovestandard",
    "from": "OCT",
    "to": "OCT",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "OCT",
    "to": "BA",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "BA",
    "to": "OCT",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "OCT",
    "to": "BA",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "BA",
    "to": "OCT",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "OCT",
    "to": "JS",
    "price": 210
  },
  {
    "type": "belowstandard",
    "from": "JS",
    "to": "OCT",
    "price": 210
  },
  {
    "type": "abovestandard",
    "from": "OCT",
    "to": "JS",
    "price": 260
  },
  {
    "type": "abovestandard",
    "from": "JS",
    "to": "OCT",
    "price": 260
  },
  {
    "type": "belowstandard",
    "from": "HLW",
    "to": "HLW",
    "price": 60
  },
  {
    "type": "abovestandard",
    "from": "HLW",
    "to": "HLW",
    "price": 80
  },
  {
    "type": "belowstandard",
    "from": "HLW",
    "to": "OCT",
    "price": 70
  },
  {
    "type": "belowstandard",
    "from": "OCT",
    "to": "HLW",
    "price": 70
  },
  {
    "type": "abovestandard",
    "from": "HLW",
    "to": "OCT",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "OCT",
    "to": "HLW",
    "price": 90
  },
  {
    "type": "belowstandard",
    "from": "HLW",
    "to": "BA",
    "price": 100
  },
  {
    "type": "belowstandard",
    "from": "BA",
    "to": "HLW",
    "price": 100
  },
  {
    "type": "abovestandard",
    "from": "HLW",
    "to": "BA",
    "price": 120
  },
  {
    "type": "abovestandard",
    "from": "BA",
    "to": "HLW",
    "price": 120
  },
  {
    "type": "belowstandard",
    "from": "HLW",
    "to": "JS",
    "price": 200
  },
  {
    "type": "belowstandard",
    "from": "JS",
    "to": "HLW",
    "price": 200
  },
  {
    "type": "abovestandard",
    "from": "HLW",
    "to": "JS",
    "price": 250
  },
  {
    "type": "abovestandard",
    "from": "JS",
    "to": "HLW",
    "price": 250
  },
  {
    "type": "belowstandard",
    "from": "JS",
    "to": "JS",
    "price": 90
  },
  {
    "type": "abovestandard",
    "from": "JS",
    "to": "JS",
    "price": 110
  }
];

/**
 * Calculate the shipment price.
 *
 * @param {string} from - The origin location.
 * @param {string} to - The destination location.
 * @param {number} number - The number of items to ship.
 * @param {"lessthan40" | "morethan40"} size - The size of the package (for packages).
 * @param {"package" | "document"} type - The type of shipment (e.g., "package").
 * @returns {number} The total price for the shipment.
 */

function calculateShipmentPrice(from, to, number, size, type) {
  if (type === "package") {
    const shipment = shipments.find(
      (shipment) =>
        shipment.from === from && shipment.to === to && shipment.type === size
    );

    if (shipment) {
      return shipment.price * number;
    } else {
      throw new Error("Shipment data not found");
    }
  } else if (type === "document") {
    return 100 * number;
  }

  throw new Error("Shipment type not found");
}


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("pricecalculator");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const fromCity = event.target["from_city"].value;
    const toCity = event.target["to_city"].value;
    const weight = event.target["units_weight"].value;
    const unitsNumber = event.target["units_number"].value;
    const unitsType = event.target["units_type"].value;
    const unitSize = event.target["units_size"].value;
    const output = document.querySelector(".price_output");
    const price = calculateShipmentPrice(
      fromCity,
      toCity,
      unitsNumber,
      unitSize,
      unitsType
    );

    output.innerHTML = `سعر الشحنة : <span style="font-size:16px; font-weight:600">${new Intl.NumberFormat(
      "en-EG",
      {
        style: "currency",
        currency: "EGP",
        useGrouping: false,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      }
    ).format(price)}</span>`;

  });
});
