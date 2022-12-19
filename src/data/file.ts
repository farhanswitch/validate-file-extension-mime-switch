import type { FilesType } from "../interfaces";
const files: FilesType = {
  "123": {
    magicNumbers: [{ offset: "0", value: "00001A00051004", length: 7 }],
    mimeType: "application/vnd.lotus-1-2-3",
  },
  cpl: {
    magicNumbers: [
      { offset: "0", value: "4D5A", length: 2 },
      { offset: "0", value: "DCDC", length: 2 },
    ],
    mimeType: "application/cpl+xml",
  },
  epub: {
    magicNumbers: [{ offset: "0", value: "504B03040A000200", length: 8 }],
    mimeType: "application/epub+zip",
  },
  ttf: {
    magicNumbers: [{ offset: "0", value: "0001000000", length: 5 }],
    mimeType: "application/font-sfnt",
  },
  gz: {
    magicNumbers: [{ offset: "0", value: "1F8B08", length: 3 }],
    mimeType: "application/gzip",
  },
  tgz: {
    magicNumbers: [{ offset: "0", value: "1F8B08", length: 3 }],
    mimeType: "application/gzip",
  },
  hqx: {
    magicNumbers: [
      {
        offset: "0",
        value:
          "28546869732066696C65206D75737420626520636F6E76657274656420776974682042696E48657820",
        length: 41,
      },
    ],
    mimeType: "application/mac-binhex40",
  },
  doc: {
    magicNumbers: [
      { offset: "0", value: "0D444F43", length: 4 },
      { offset: "0", value: "CF11E0A1B11AE100", length: 8 },
      { offset: "0", value: "D0CF11E0A1B11AE1", length: 8 },
      { offset: "0", value: "DBA52D00", length: 4 },
      { offset: "512", value: "ECA5C100", length: 4 },
    ],
    mimeType: "application/msword",
  },
  mxf: {
    magicNumbers: [
      { offset: "0", value: "060E2B34020501010D0102010102", length: 14 },
      {
        offset: "0",
        value: "3C435472616E7354696D656C696E653E",
        length: 16,
      },
    ],
    mimeType: "application/mxf",
  },
  lha: {
    magicNumbers: [{ offset: "2", value: "2D6C68", length: 3 }],
    mimeType: "application/octet-stream",
  },
  lzh: {
    magicNumbers: [{ offset: "2", value: "2D6C68", length: 3 }],
    mimeType: "application/octet-stream",
  },
  exe: {
    magicNumbers: [{ offset: "0", value: "4D5A", length: 2 }],
    mimeType: "application/octet-stream",
  },
  class: {
    magicNumbers: [{ offset: "0", value: "CAFEBABE", length: 4 }],
    mimeType: "application/octet-stream",
  },
  dll: {
    magicNumbers: [{ offset: "0", value: "4D5A", length: 2 }],
    mimeType: "application/octet-stream",
  },
  img: {
    magicNumbers: [
      {
        offset: "0",
        value: "000100005374616E64617264204A6574204442",
        length: 19,
      },
      { offset: "0", value: "504943540008", length: 6 },
      { offset: "0", value: "514649FB", length: 4 },
      { offset: "0", value: "53434D49", length: 4 },
      {
        offset: "0",
        value:
          "7E742C015070024D52010000000800000001000031000000310000004301FF0001000800010000007e742c01",
        length: 44,
      },
      { offset: "0", value: "EB3C902A", length: 4 },
    ],
    mimeType: "application/octet-stream",
  },
  iso: {
    magicNumbers: [
      { offset: "32769", value: "4344303031", length: 5 },
      { offset: "34817", value: "4344303031", length: 5 },
      { offset: "36865", value: "4344303031", length: 5 },
    ],
    mimeType: "application/octet-stream",
  },
  ogx: {
    magicNumbers: [
      { offset: "0", value: "4F67675300020000000000000000", length: 14 },
    ],
    mimeType: "application/ogg",
  },
  oxps: {
    magicNumbers: [{ offset: "0", value: "504B0304", length: 4 }],
    mimeType: "application/oxps",
  },
  pdf: {
    magicNumbers: [{ offset: "0", value: "25504446", length: 4 }],
    mimeType: "application/pdf",
  },
  p10: {
    magicNumbers: [{ offset: "0", value: "64000000", length: 4 }],
    mimeType: "application/pkcs10",
  },
  pls: {
    magicNumbers: [{ offset: "0", value: "5B706C61796C6973745D", length: 10 }],
    mimeType: "application/pls+xml",
  },
  eps: {
    magicNumbers: [
      {
        offset: "0",
        value: "252150532D41646F62652D332E3020455053462D332030",
        length: 23,
      },
      { offset: "0", value: "C5D0D3C6", length: 4 },
    ],
    mimeType: "application/postscript",
  },
  ai: {
    magicNumbers: [{ offset: "0", value: "25504446", length: 4 }],
    mimeType: "application/postscript",
  },
  rtf: {
    magicNumbers: [{ offset: "0", value: "7B5C72746631", length: 6 }],
    mimeType: "application/rtf",
  },
  tsa: {
    magicNumbers: [{ offset: "0", value: "47", length: 1 }],
    mimeType: "application/tamp-sequence-adjust",
  },
  msf: {
    magicNumbers: [
      {
        offset: "0",
        value: "2F2F203C212D2D203C6D64623A6D6F726B3A7A",
        length: 19,
      },
    ],
    mimeType: "application/vnd.epson.msf",
  },
  fdf: {
    magicNumbers: [{ offset: "0", value: "25504446", length: 4 }],
    mimeType: "application/vnd.fdf",
  },
  fm: {
    magicNumbers: [
      { offset: "0", value: "3C4D616B657246696C6520", length: 11 },
    ],
    mimeType: "application/vnd.framemaker",
  },
  kmz: {
    magicNumbers: [{ offset: "0", value: "504B0304", length: 4 }],
    mimeType: "application/vnd.google-earth.kmz",
  },
  tpl: {
    magicNumbers: [
      { offset: "0", value: "0020AF30", length: 4 },
      { offset: "0", value: "6D7346696C7465724C697374", length: 12 },
    ],
    mimeType: "application/vnd.groove-tool-template",
  },
  kwd: {
    magicNumbers: [{ offset: "0", value: "504B0304", length: 4 }],
    mimeType: "application/vnd.kde.kword",
  },
  wk4: {
    magicNumbers: [
      { offset: "0", value: "00001A000210040000000000", length: 12 },
    ],
    mimeType: "application/vnd.lotus-1-2-3",
  },
  wk3: {
    magicNumbers: [
      { offset: "0", value: "00001A000010040000000000", length: 12 },
    ],
    mimeType: "application/vnd.lotus-1-2-3",
  },
  wk1: {
    magicNumbers: [
      { offset: "0", value: "0000020006040600080000000000", length: 14 },
    ],
    mimeType: "application/vnd.lotus-1-2-3",
  },
  apr: {
    magicNumbers: [{ offset: "0", value: "D0CF11E0A1B11AE1", length: 8 }],
    mimeType: "application/vnd.lotus-approach",
  },
  nsf: {
    magicNumbers: [
      { offset: "0", value: "1A0000040000", length: 6 },
      { offset: "0", value: "4E45534D1A01", length: 6 },
    ],
    mimeType: "application/vnd.lotus-notes",
  },
  ntf: {
    magicNumbers: [
      { offset: "0", value: "1A0000", length: 3 },
      {
        offset: "0",
        value: "30314F52444E414E43452053555256455920202020202020",
        length: 24,
      },
      { offset: "0", value: "4E49544630", length: 5 },
    ],
    mimeType: "application/vnd.lotus-notes",
  },
  org: {
    magicNumbers: [{ offset: "0", value: "414F4C564D313030", length: 8 }],
    mimeType: "application/vnd.lotus-organizer",
  },
  lwp: {
    magicNumbers: [{ offset: "0", value: "576F726450726F", length: 7 }],
    mimeType: "application/vnd.lotus-wordpro",
  },
  sam: {
    magicNumbers: [{ offset: "0", value: "5B50686F6E655D", length: 7 }],
    mimeType: "application/vnd.lotus-wordpro",
  },
  mif: {
    magicNumbers: [
      { offset: "0", value: "3C4D616B657246696C6520", length: 11 },
      { offset: "0", value: "56657273696F6E20", length: 8 },
    ],
    mimeType: "application/vnd.mif",
  },
  xul: {
    magicNumbers: [
      {
        offset: "0",
        value: "3C3F786D6C2076657273696F6E3D22312E30223F3E",
        length: 21,
      },
    ],
    mimeType: "application/vnd.mozilla.xul+xml",
  },
  asf: {
    magicNumbers: [
      {
        offset: "0",
        value: "3026B2758E66CF11A6D900AA0062CE6C",
        length: 16,
      },
    ],
    mimeType: "application/vnd.ms-asf",
  },
  cab: {
    magicNumbers: [
      { offset: "0", value: "49536328", length: 4 },
      { offset: "0", value: "4D534346", length: 4 },
    ],
    mimeType: "application/vnd.ms-cab-compressed",
  },
  xls: {
    magicNumbers: [
      { offset: "512", value: "0908100000060500", length: 8 },
      { offset: "0", value: "D0CF11E0A1B11AE1", length: 8 },
      { offset: "512", value: "FDFFFFFF04", length: 5 },
      { offset: "512", value: "FDFFFFFF20000000", length: 8 },
    ],
    mimeType: "application/vnd.ms-excel",
  },
  xla: {
    magicNumbers: [{ offset: "0", value: "D0CF11E0A1B11AE1", length: 8 }],
    mimeType: "application/vnd.ms-excel",
  },
  chm: {
    magicNumbers: [{ offset: "0", value: "49545346", length: 4 }],
    mimeType: "application/vnd.ms-htmlhelp",
  },
  ppt: {
    magicNumbers: [
      { offset: "512", value: "006E1EF0", length: 4 },
      { offset: "512", value: "0F00E803", length: 4 },
      { offset: "512", value: "A0461DF0", length: 4 },
      { offset: "0", value: "D0CF11E0A1B11AE1", length: 8 },
      { offset: "512", value: "FDFFFFFF04", length: 5 },
    ],
    mimeType: "application/vnd.ms-powerpoint",
  },
  pps: {
    magicNumbers: [{ offset: "0", value: "D0CF11E0A1B11AE1", length: 8 }],
    mimeType: "application/vnd.ms-powerpoint",
  },
  wks: {
    magicNumbers: [
      { offset: "0", value: "0E574B53", length: 4 },
      { offset: "0", value: "FF000200040405540200", length: 10 },
    ],
    mimeType: "application/vnd.ms-works",
  },
  wpl: {
    magicNumbers: [
      {
        offset: "84",
        value:
          "4D6963726F736F66742057696E646F7773204D6564696120506C61796572202D2D20",
        length: 34,
      },
    ],
    mimeType: "application/vnd.ms-wpl",
  },
  xps: {
    magicNumbers: [{ offset: "0", value: "504B0304", length: 4 }],
    mimeType: "application/vnd.ms-xpsdocument",
  },
  cif: {
    magicNumbers: [{ offset: "2", value: "5B56657273696F6E", length: 8 }],
    mimeType: "application/vnd.multiad.creator.cif",
  },
  odp: {
    magicNumbers: [{ offset: "0", value: "504B0304", length: 4 }],
    mimeType: "application/vnd.oasis.opendocument.presentation",
  },
  odt: {
    magicNumbers: [{ offset: "0", value: "504B0304", length: 4 }],
    mimeType: "application/vnd.oasis.opendocument.text",
  },
  ott: {
    magicNumbers: [{ offset: "0", value: "504B0304", length: 4 }],
    mimeType: "application/vnd.oasis.opendocument.text-template",
  },
  pptx: {
    magicNumbers: [{ offset: "0", value: "504B030414000600", length: 8 }],
    mimeType:
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  },
  xlsx: {
    magicNumbers: [
      { offset: "0", value: "504B030414000600", length: 8 },
      { offset: "0", value: "504B03041400", length: 6 },
    ],
    mimeType:
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  },
  docx: {
    magicNumbers: [{ offset: "0", value: "504B030414000600", length: 8 }],
    mimeType:
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  },
  prc: {
    magicNumbers: [
      { offset: "0", value: "424F4F4B4D4F4249", length: 8 },
      { offset: "60", value: "74424D504B6E5772", length: 8 },
    ],
    mimeType: "application/vnd.palm",
  },
  pdb: {
    magicNumbers: [
      {
        offset: "11",
        value: "000000000000000000000000000000000000000000000000",
        length: 24,
      },
      {
        offset: "0",
        value: "4D2D5720506F636B6574204469637469",
        length: 16,
      },
      {
        offset: "0",
        value: "4D6963726F736F667420432F432B2B20",
        length: 16,
      },
      { offset: "0", value: "736D5F", length: 3 },
      { offset: "0", value: "737A657A", length: 4 },
      {
        offset: "0",
        value: "ACED0005737200126267626C69747A2E",
        length: 16,
      },
    ],
    mimeType: "application/vnd.palm",
  },
  qxd: {
    magicNumbers: [{ offset: "0", value: "00004D4D585052", length: 7 }],
    mimeType: "application/vnd.Quark.QuarkXPress",
  },
  rar: {
    magicNumbers: [
      { offset: "0", value: "526172211A0700", length: 7 },
      { offset: "0", value: "526172211A070100", length: 8 },
    ],
    mimeType: "application/vnd.rar",
  },
  mmf: {
    magicNumbers: [{ offset: "0", value: "4D4D4D440000", length: 6 }],
    mimeType: "application/vnd.smaf",
  },
  cap: {
    magicNumbers: [
      { offset: "0", value: "52545353", length: 4 },
      { offset: "0", value: "58435000", length: 4 },
    ],
    mimeType: "application/vnd.tcpdump.pcap",
  },
  dmp: {
    magicNumbers: [
      { offset: "0", value: "4D444D5093A7", length: 6 },
      { offset: "0", value: "5041474544553634", length: 8 },
      { offset: "0", value: "5041474544554D50", length: 8 },
    ],
    mimeType: "application/vnd.tcpdump.pcap",
  },
  wpd: {
    magicNumbers: [{ offset: "0", value: "FF575043", length: 4 }],
    mimeType: "application/vnd.wordperfect",
  },
  xar: {
    magicNumbers: [{ offset: "0", value: "78617221", length: 4 }],
    mimeType: "application/vnd.xara",
  },
  spf: {
    magicNumbers: [{ offset: "0", value: "5350464900", length: 5 }],
    mimeType: "application/vnd.yamaha.smaf-phrase",
  },
  dtd: {
    magicNumbers: [{ offset: "0", value: "0764743264647464", length: 8 }],
    mimeType: "application/xml-dtd",
  },
  zip: {
    magicNumbers: [
      { offset: "0", value: "504B0304", length: 4 },
      { offset: "0", value: "504B0304", length: 4 },
      { offset: "0", value: "504B030414000100630000000000", length: 14 },
      { offset: "0", value: "504B0708", length: 4 },
      { offset: "30", value: "504B4C495445", length: 6 },
      { offset: "526", value: "504B537058", length: 5 },
      { offset: "29152", value: "57696E5A6970", length: 6 },
    ],
    mimeType: "application/zip",
  },
  amr: {
    magicNumbers: [{ offset: "0", value: "2321414D52", length: 5 }],
    mimeType: "audio/AMR",
  },
  au: {
    magicNumbers: [
      { offset: "0", value: "2E736E64", length: 4 },
      { offset: "0", value: "646E732E", length: 4 },
    ],
    mimeType: "audio/basic",
  },
  m4a: {
    magicNumbers: [
      { offset: "0", value: "00000020667479704D344120", length: 12 },
      { offset: "4", value: "667479704D344120", length: 8 },
    ],
    mimeType: "audio/mp4",
  },
  mp3: {
    magicNumbers: [
      { offset: "0", value: "494433", length: 3 },
      { offset: "0", value: "FFFB", length: 2 },
      { offset: "0", value: "FFF2", length: 2 },
      { offset: "0", value: "FFF3", length: 2 },
    ],
    mimeType: "audio/mpeg",
  },
  oga: {
    magicNumbers: [
      { offset: "0", value: "4F67675300020000000000000000", length: 14 },
    ],
    mimeType: "audio/ogg",
  },
  ogg: {
    magicNumbers: [
      { offset: "0", value: "4F67675300020000000000000000", length: 14 },
    ],
    mimeType: "audio/ogg",
  },
  qcp: {
    magicNumbers: [{ offset: "0", value: "52494646", length: 4 }],
    mimeType: "audio/qcelp",
  },
  koz: {
    magicNumbers: [{ offset: "0", value: "49443303000000", length: 7 }],
    mimeType: "audio/vnd.audikoz",
  },
  bmp: {
    magicNumbers: [{ offset: "0", value: "424D", length: 2 }],
    mimeType: "image/bmp",
  },
  dib: {
    magicNumbers: [{ offset: "0", value: "424D", length: 2 }],
    mimeType: "image/bmp",
  },
  emf: {
    magicNumbers: [{ offset: "0", value: "01000000", length: 4 }],
    mimeType: "image/emf",
  },
  fits: {
    magicNumbers: [
      {
        offset: "0",
        value: "53494D504C4520203D202020202020202020202020202020202020202054",
        length: 30,
      },
    ],
    mimeType: "image/fits",
  },
  gif: {
    magicNumbers: [{ offset: "0", value: "474946383961", length: 6 }],
    mimeType: "image/gif",
  },
  jp2: {
    magicNumbers: [{ offset: "0", value: "0000000C6A5020200D0A", length: 10 }],
    mimeType: "image/jp2",
  },
  jpg: {
    magicNumbers: [
      { offset: "0", value: "FFD8", length: 2 },
      { offset: "0", value: "FFD8", length: 2 },
      { offset: "0", value: "FFD8", length: 2 },
      { offset: "0", value: "FFD8", length: 2 },
    ],
    mimeType: "image/jpeg",
  },
  jpeg: {
    magicNumbers: [
      { offset: "0", value: "FFD8", length: 2 },
      { offset: "0", value: "FFD8", length: 2 },
    ],
    mimeType: "image/jpeg",
  },
  jpe: {
    magicNumbers: [
      { offset: "0", value: "FFD8", length: 2 },
      { offset: "0", value: "FFD8", length: 2 },
    ],
    mimeType: "image/jpeg",
  },
  jfif: {
    magicNumbers: [{ offset: "0", value: "FFD8", length: 2 }],
    mimeType: "image/jpeg",
  },
  png: {
    magicNumbers: [{ offset: "0", value: "89504E470D0A1A0A", length: 8 }],
    mimeType: "image/png",
  },
  tiff: {
    magicNumbers: [
      { offset: "0", value: "492049", length: 3 },
      { offset: "0", value: "49492A00", length: 4 },
      { offset: "0", value: "4D4D002A", length: 4 },
      { offset: "0", value: "4D4D002B", length: 4 },
    ],
    mimeType: "image/tiff",
  },
  tif: {
    magicNumbers: [
      { offset: "0", value: "492049", length: 3 },
      { offset: "0", value: "49492A00", length: 4 },
      { offset: "0", value: "4D4D002A", length: 4 },
      { offset: "0", value: "4D4D002B", length: 4 },
    ],
    mimeType: "image/tiff",
  },
  psd: {
    magicNumbers: [{ offset: "0", value: "38425053", length: 4 }],
    mimeType: "image/vnd.adobe.photoshop",
  },
  dwg: {
    magicNumbers: [{ offset: "0", value: "41433130", length: 4 }],
    mimeType: "image/vnd.dwg",
  },
  ico: {
    magicNumbers: [{ offset: "0", value: "00000100", length: 4 }],
    mimeType: "image/vnd.microsoft.icon",
  },
  mdi: {
    magicNumbers: [{ offset: "0", value: "4550", length: 2 }],
    mimeType: "image/vnd.ms-modi",
  },
  hdr: {
    magicNumbers: [
      { offset: "0", value: "233F52414449414E43450A", length: 11 },
      { offset: "0", value: "49536328", length: 4 },
    ],
    mimeType: "image/vnd.radiance",
  },
  pcx: {
    magicNumbers: [{ offset: "512", value: "0908100000060500", length: 8 }],
    mimeType: "image/vnd.zbrush.pcx",
  },
  wmf: {
    magicNumbers: [
      { offset: "0", value: "010009000003", length: 6 },
      { offset: "0", value: "D7CDC69A", length: 4 },
    ],
    mimeType: "image/wmf",
  },
  eml: {
    magicNumbers: [
      { offset: "0", value: "46726F6D3A20", length: 6 },
      { offset: "0", value: "52657475726E2D506174683A20", length: 13 },
      { offset: "0", value: "52657475726E2D706174683A20", length: 13 },
      { offset: "0", value: "582D", length: 2 },
    ],
    mimeType: "message/rfc822",
  },
  art: {
    magicNumbers: [{ offset: "0", value: "4A47040E", length: 4 }],
    mimeType: "message/rfc822",
  },
  manifest: {
    magicNumbers: [
      { offset: "0", value: "3C3F786D6C2076657273696F6E3D", length: 14 },
    ],
    mimeType: "text/cache-manifest",
  },
  log: {
    magicNumbers: [
      {
        offset: "0",
        value: "2A2A2A2020496E7374616C6C6174696F6E205374617274656420",
        length: 26,
      },
    ],
    mimeType: "text/plain",
  },
  tsv: {
    magicNumbers: [{ offset: "0", value: "47", length: 1 }],
    mimeType: "text/tab-separated-values",
  },
  vcf: {
    magicNumbers: [
      { offset: "0", value: "424547494E3A56434152440D0A", length: 13 },
    ],
    mimeType: "text/vcard",
  },
  dms: {
    magicNumbers: [{ offset: "0", value: "444D5321", length: 4 }],
    mimeType: "text/vnd.DMClientScript",
  },
  dot: {
    magicNumbers: [{ offset: "0", value: "D0CF11E0A1B11AE1", length: 8 }],
    mimeType: "text/vnd.graphviz",
  },
  ts: {
    magicNumbers: [{ offset: "0", value: "47", length: 1 }],
    mimeType: "text/vnd.trolltech.linguist",
  },
  "3gp": {
    magicNumbers: [
      { offset: "0", value: "0000001466747970336770", length: 11 },
      { offset: "0", value: "0000002066747970336770", length: 11 },
    ],
    mimeType: "video/3gpp",
  },
  "3g2": {
    magicNumbers: [
      { offset: "0", value: "0000001466747970336770", length: 11 },
      { offset: "0", value: "0000002066747970336770", length: 11 },
    ],
    mimeType: "video/3gpp2",
  },
  mp4: {
    magicNumbers: [
      { offset: "0", value: "000000146674797069736F6D", length: 12 },
      { offset: "0", value: "000000186674797033677035", length: 12 },
      {
        offset: "0",
        value: "0000001C667479704D534E56012900464D534E566D703432",
        length: 24,
      },
      { offset: "4", value: "6674797033677035", length: 8 },
      { offset: "4", value: "667479704D534E56", length: 8 },
      { offset: "4", value: "6674797069736F6D", length: 8 },
    ],
    mimeType: "video/mp4",
  },
  m4v: {
    magicNumbers: [
      { offset: "0", value: "00000018667479706D703432", length: 12 },
      { offset: "0", value: "00000020667479704D345620", length: 12 },
      { offset: "4", value: "667479706D703432", length: 8 },
    ],
    mimeType: "video/mp4",
  },
  mpeg: {
    magicNumbers: [
      { offset: "0", value: "00000100", length: 4 },
      { offset: "0", value: "FFD8", length: 2 },
    ],
    mimeType: "video/mpeg",
  },
  mpg: {
    magicNumbers: [
      { offset: "0", value: "00000100", length: 4 },
      { offset: "0", value: "000001BA", length: 4 },
      { offset: "0", value: "FFD8", length: 2 },
    ],
    mimeType: "video/mpeg",
  },
  ogv: {
    magicNumbers: [
      { offset: "0", value: "4F67675300020000000000000000", length: 14 },
    ],
    mimeType: "video/ogg",
  },
  mov: {
    magicNumbers: [
      { offset: "0", value: "00", length: 1 },
      { offset: "0", value: "000000146674797071742020", length: 12 },
      { offset: "4", value: "6674797071742020", length: 8 },
      { offset: "4", value: "6D6F6F76", length: 4 },
    ],
    mimeType: "video/quicktime",
  },
  cpt: {
    magicNumbers: [
      { offset: "0", value: "4350543746494C45", length: 8 },
      { offset: "0", value: "43505446494C45", length: 7 },
    ],
    mimeType: "application/mac-compactpro",
  },
  sxc: {
    magicNumbers: [
      { offset: "0", value: "504B0304", length: 4 },
      { offset: "0", value: "504B0304", length: 4 },
    ],
    mimeType: "application/vnd.sun.xml.calc",
  },
  sxd: {
    magicNumbers: [{ offset: "0", value: "504B0304", length: 4 }],
    mimeType: "application/vnd.sun.xml.draw",
  },
  sxi: {
    magicNumbers: [{ offset: "0", value: "504B0304", length: 4 }],
    mimeType: "application/vnd.sun.xml.impress",
  },
  sxw: {
    magicNumbers: [{ offset: "0", value: "504B0304", length: 4 }],
    mimeType: "application/vnd.sun.xml.writer",
  },
  bz2: {
    magicNumbers: [{ offset: "0", value: "425A68", length: 3 }],
    mimeType: "application/x-bzip2",
  },
  vcd: {
    magicNumbers: [
      {
        offset: "0",
        value: "454E5452595643440200000102001858",
        length: 16,
      },
    ],
    mimeType: "application/x-cdlink",
  },
  csh: {
    magicNumbers: [
      { offset: "0", value: "6375736800000002000000", length: 11 },
    ],
    mimeType: "application/x-csh",
  },
  spl: {
    magicNumbers: [{ offset: "0", value: "00000100", length: 4 }],
    mimeType: "application/x-futuresplash",
  },
  jar: {
    magicNumbers: [
      { offset: "0", value: "4A4152435300", length: 6 },
      { offset: "0", value: "504B0304", length: 4 },
      { offset: "0", value: "504B0304140008000800", length: 10 },
      { offset: "0", value: "5F27A889", length: 4 },
    ],
    mimeType: "application/x-java-archive",
  },
  rpm: {
    magicNumbers: [{ offset: "0", value: "EDABEEDB", length: 4 }],
    mimeType: "application/x-rpm",
  },
  swf: {
    magicNumbers: [
      { offset: "0", value: "435753", length: 3 },
      { offset: "0", value: "465753", length: 3 },
      { offset: "0", value: "5A5753", length: 3 },
    ],
    mimeType: "application/x-shockwave-flash",
  },
  sit: {
    magicNumbers: [
      { offset: "0", value: "5349542100", length: 5 },
      {
        offset: "0",
        value: "5374756666497420286329313939372D",
        length: 16,
      },
    ],
    mimeType: "application/x-stuffit",
  },
  tar: {
    magicNumbers: [{ offset: "257", value: "7573746172", length: 5 }],
    mimeType: "application/x-tar",
  },
  xpi: {
    magicNumbers: [{ offset: "0", value: "504B0304", length: 4 }],
    mimeType: "application/x-xpinstall",
  },
  xz: {
    magicNumbers: [{ offset: "0", value: "FD377A585A00", length: 6 }],
    mimeType: "application/x-xz",
  },
  mid: {
    magicNumbers: [{ offset: "0", value: "4D546864", length: 4 }],
    mimeType: "audio/midi",
  },
  midi: {
    magicNumbers: [{ offset: "0", value: "4D546864", length: 4 }],
    mimeType: "audio/midi",
  },
  aiff: {
    magicNumbers: [{ offset: "0", value: "464F524D00", length: 5 }],
    mimeType: "audio/x-aiff",
  },
  flac: {
    magicNumbers: [{ offset: "0", value: "664C614300000022", length: 8 }],
    mimeType: "audio/x-flac",
  },
  wma: {
    magicNumbers: [
      {
        offset: "0",
        value: "3026B2758E66CF11A6D900AA0062CE6C",
        length: 16,
      },
    ],
    mimeType: "audio/x-ms-wma",
  },
  ram: {
    magicNumbers: [{ offset: "0", value: "727473703A2F2F", length: 7 }],
    mimeType: "audio/x-pn-realaudio",
  },
  rm: {
    magicNumbers: [{ offset: "0", value: "2E524D46", length: 4 }],
    mimeType: "audio/x-pn-realaudio",
  },
  ra: {
    magicNumbers: [
      { offset: "0", value: "2E524D460000001200", length: 9 },
      { offset: "0", value: "2E7261FD00", length: 5 },
    ],
    mimeType: "audio/x-realaudio",
  },
  wav: {
    magicNumbers: [{ offset: "0", value: "52494646", length: 4 }],
    mimeType: "audio/x-wav",
  },
  webp: {
    magicNumbers: [{ offset: "0", value: "52494646", length: 4 }],
    mimeType: "image/webp",
  },
  pgm: {
    magicNumbers: [{ offset: "0", value: "50350A", length: 3 }],
    mimeType: "image/x-portable-graymap",
  },
  rgb: {
    magicNumbers: [{ offset: "0", value: "01DA01010003", length: 6 }],
    mimeType: "image/x-rgb",
  },
  webm: {
    magicNumbers: [{ offset: "0", value: "1A45DFA3", length: 4 }],
    mimeType: "video/webm",
  },
  flv: {
    magicNumbers: [
      { offset: "0", value: "00000020667479704D345620", length: 12 },
      { offset: "0", value: "464C5601", length: 4 },
    ],
    mimeType: "video/x-flv",
  },
  mkv: {
    magicNumbers: [{ offset: "0", value: "1A45DFA3", length: 4 }],
    mimeType: "video/x-matroska",
  },
  asx: {
    magicNumbers: [{ offset: "0", value: "3C", length: 1 }],
    mimeType: "video/x-ms-asf",
  },
  wmv: {
    magicNumbers: [
      {
        offset: "0",
        value: "3026B2758E66CF11A6D900AA0062CE6C",
        length: 16,
      },
    ],
    mimeType: "video/x-ms-wmv",
  },
  avi: {
    magicNumbers: [{ offset: "0", value: "52494646", length: 4 }],
    mimeType: "video/x-msvideo",
  },
};

export default files;
