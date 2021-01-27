export default {
  seed: {synopsis: ["seed ival"], id: "seed", type: "opcode"},
  x: {synopsis: ["x anything"], id: "x", type: "scoregen"},
  v: {synopsis: ["v p1"], id: "v", type: "scoregen"},
  t: {
    synopsis: ["t p1 p2 p3 p4 ... (unlimited)"],
    id: "t",
    type: "scoregen",
  },
  s: {synopsis: ["s [time]"], id: "s", type: "scoregen"},
  "}": {synopsis: ["}"], id: "rightbrace", type: "scoregen"},
  r: {synopsis: ["r p1 p2"], id: "r", type: "scoregen"},
  q: {synopsis: ["q p1 p2 p3"], id: "q", type: "scoregen"},
  n: {synopsis: ["n p1"], id: "n", type: "scoregen"},
  m: {synopsis: ["m p1"], id: "m", type: "scoregen"},
  "{": {synopsis: ["{ p1 p2"], id: "leftbrace", type: "scoregen"},
  i: {
    synopsis: ["S(x) (control-rate or init-rate arg)"],
    id: "ops",
    type: "opcode",
  },
  GENwave: {
    synopsis: ['f # time size "wave" fnsf seq rescale'],
    id: "GENwave",
    type: "scoregen",
  },
  GENtanh: {
    synopsis: ['f # time size "tanh" start end rescale'],
    id: "GENtanh",
    type: "scoregen",
  },
  GENsone: {
    synopsis: ['f # time size "sone" start end equalpoint rescale'],
    id: "GENsone",
    type: "scoregen",
  },
  GENquadbezier: {
    synopsis: [
      'f # time size "quadbezier" y1 cx1 cy1 x2 y2 [cx2 cy2 x3 y3 ...]',
    ],
    id: "GENquadbezier",
    type: "scoregen",
  },
  GENpadsynth: {
    synopsis: [
      'f # score_time table_size "padsynth" fundamental_frequency partial_bandwidth partial_scale harmonic_stretch profile_shape profile_shape_parameter partial1_amplitude [partial2_amplitude ...]',
    ],
    id: "GENpadsynth",
    type: "scoregen",
  },
  GENfarey: {
    synopsis: ['f # time size "farey" fareynum mode'],
    id: "GENfarey",
    type: "scoregen",
  },
  GENexp: {
    synopsis: ['f # time size "exp" start end rescale'],
    id: "GENexp",
    type: "scoregen",
  },
  GEN53: {
    synopsis: ["f # time size 53 fsrc [mode fwin]"],
    id: "GEN53",
    type: "scoregen",
  },
  GEN52: {
    synopsis: [
      "f # time size 52 nchannels fsrc1 offset1 srcchnls1 [fsrc2 offset2 srcchnls2 ... fsrcN offsetN srcchnlsN]",
    ],
    id: "GEN52",
    type: "scoregen",
  },
  GEN51: {
    synopsis: [
      "f # time size -51 numgrades interval basefreq basekey tuningRatio1 tuningRatio2 .... tuningRationN",
    ],
    id: "GEN51",
    type: "scoregen",
  },
  GEN49: {
    synopsis: ["f# time size 49 filcod skiptime format"],
    id: "GEN49",
    type: "scoregen",
  },
  GEN43: {
    synopsis: ["f # time size 43 filecod channel"],
    id: "GEN43",
    type: "scoregen",
  },
  GEN42: {
    synopsis: [
      "f # time size -42 min1 max1 prob1 min2 max2 prob2 min3 max3 prob3 ... minN maxN probN",
    ],
    id: "GEN42",
    type: "scoregen",
  },
  GEN41: {
    synopsis: [
      "f # time size -41 value1 prob1 value2 prob2 value3 prob3 ... valueN probN ",
    ],
    id: "GEN41",
    type: "scoregen",
  },
  GEN40: {
    synopsis: ["f # time size 40 shapetab"],
    id: "GEN40",
    type: "scoregen",
  },
  GEN34: {
    synopsis: ["f # time size 34 src nh scl [fmode]"],
    id: "GEN34",
    type: "scoregen",
  },
  GEN33: {
    synopsis: ["f # time size 33 src nh scl [fmode]"],
    id: "GEN33",
    type: "scoregen",
  },
  GEN32: {
    synopsis: ["f # time size 32 srca pna stra phsa srcb pnb strb phsb ..."],
    id: "GEN32",
    type: "scoregen",
  },
  GEN31: {
    synopsis: ["f # time size 31 src pna stra phsa pnb strb phsb ..."],
    id: "GEN31",
    type: "scoregen",
  },
  GEN30: {
    synopsis: ["f # time size 30 src minh maxh [ref_sr] [interp]"],
    id: "GEN30",
    type: "scoregen",
  },
  GEN28: {
    synopsis: ["f # time size 28 ifilcod"],
    id: "GEN28",
    type: "scoregen",
  },
  GEN27: {
    synopsis: ["f # time size 27 x1 y1 x2 y2 x3 ..."],
    id: "GEN27",
    type: "scoregen",
  },
  GEN25: {
    synopsis: ["f # time size 25 x1 y1 x2 y2 x3 ..."],
    id: "GEN25",
    type: "scoregen",
  },
  GEN24: {
    synopsis: ["f # time size -24 ftable min max"],
    id: "GEN24",
    type: "scoregen",
  },
  GEN23: {
    synopsis: ['f # time size -23 "filename.txt"'],
    id: "GEN23",
    type: "scoregen",
  },
  GEN22: {synopsis: [], id: "GEN22", type: "scoregen"},
  GEN21: {
    synopsis: ["f # time size 21 type level [arg1 [arg2]]"],
    id: "GEN21",
    type: "scoregen",
  },
  GEN20: {
    synopsis: ["f # time size 20 window max [opt]"],
    id: "GEN20",
    type: "scoregen",
  },
  GEN19: {
    synopsis: ["f # time size 19 pna stra phsa dcoa pnb strb phsb dcob ..."],
    id: "GEN19",
    type: "scoregen",
  },
  GEN18: {
    synopsis: [
      "f # time size 18 fna ampa starta finisha fnb ampb startb finishb ...",
    ],
    id: "GEN18",
    type: "scoregen",
  },
  GEN17: {
    synopsis: ["f # time size 17 x1 a x2 b x3 c ..."],
    id: "GEN17",
    type: "scoregen",
  },
  GEN16: {
    synopsis: [
      "f # time size 16 val1 dur1 type1 val2 [dur2 type2 val3 ... typeX valN]",
    ],
    id: "GEN16",
    type: "scoregen",
  },
  GEN15: {
    synopsis: ["f # time size 15 xint xamp h0 phs0 h1 phs1 h2 phs2 ..."],
    id: "GEN15",
    type: "scoregen",
  },
  GEN14: {
    synopsis: ["f # time size 14 xint xamp h0 h1 h2 ..."],
    id: "GEN14",
    type: "scoregen",
  },
  GEN13: {
    synopsis: ["f # time size 13 xint xamp h0 h1 h2 ..."],
    id: "GEN13",
    type: "scoregen",
  },
  GEN12: {
    synopsis: ["f # time size 12 xint"],
    id: "GEN12",
    type: "scoregen",
  },
  GEN11: {
    synopsis: ["f # time size 11 nh [lh] [r]"],
    id: "GEN11",
    type: "scoregen",
  },
  GEN10: {
    synopsis: ["f # time size 10 str1 str2 str3 str4 ..."],
    id: "GEN10",
    type: "scoregen",
  },
  GEN09: {
    synopsis: ["f # time size 9 pna stra phsa pnb strb phsb ..."],
    id: "GEN09",
    type: "scoregen",
  },
  GEN08: {
    synopsis: ["f # time size 8 a n1 b n2 c n3 d ..."],
    id: "GEN08",
    type: "scoregen",
  },
  GEN07: {
    synopsis: ["f # time size 7 a n1 b n2 c ..."],
    id: "GEN07",
    type: "scoregen",
  },
  GEN06: {
    synopsis: ["f # time size 6 a n1 b n2 c n3 d ..."],
    id: "GEN06",
    type: "scoregen",
  },
  GEN05: {
    synopsis: ["f # time size 5 a n1 b n2 c ..."],
    id: "GEN05",
    type: "scoregen",
  },
  GEN04: {
    synopsis: ["f # time size 4 source# sourcemode"],
    id: "GEN04",
    type: "scoregen",
  },
  GEN03: {
    synopsis: ["f # time size 3 xval1 xval2 c0 c1 c2 ... cn"],
    id: "GEN03",
    type: "scoregen",
  },
  GEN02: {
    synopsis: ["f # time size 2 v1 v2 v3 ..."],
    id: "GEN02",
    type: "scoregen",
  },
  GEN01: {
    synopsis: ["f# time size 1 filcod skiptime format channel"],
    id: "GEN01",
    type: "scoregen",
  },
  f: {
    synopsis: ["f p1 p2 p3 p4 p5 ... PMAX"],
    id: "f",
    type: "scoregen",
  },
  e: {synopsis: ["e [0 time]"], id: "e", type: "scoregen"},
  d: {synopsis: ["i p1 p2 p3 p4"], id: "d", type: "scoregen"},
  B: {synopsis: ["B p1"], id: "capB", type: "scoregen"},
  b: {synopsis: ["b p1"], id: "b", type: "scoregen"},
  a: {
    synopsis: ["k(x) (i-rate args only)", "k(x) (a-rate args only)"],
    id: "opk",
    type: "opcode",
  },
  C: {synopsis: ["C p1"], id: "C", type: "scoregen"},
  "0dbfs": {
    synopsis: ["0dbfs = iarg", "0dbfs "],
    id: "Zerodbfs",
    type: "opcode",
  },
  A4: {synopsis: ["A4 = iarg"], id: "A4", type: "opcode"},
  ATSadd: {
    synopsis: [
      "ar ATSadd ktimepnt, kfmod, iatsfile, ifn, ipartials[, ipartialoffset, ipartialincr, igatefn]",
    ],
    id: "ATSadd",
    type: "opcode",
  },
  ATSaddnz: {
    synopsis: [
      "ar ATSaddnz ktimepnt, iatsfile, ibands[, ibandoffset, ibandincr]",
    ],
    id: "ATSaddnz",
    type: "opcode",
  },
  ATSbufread: {
    synopsis: [
      "ATSbufread ktimepnt, kfmod, iatsfile, ipartials[, ipartialoffset, ipartialincr]",
    ],
    id: "ATSbufread",
    type: "opcode",
  },
  ATScross: {
    synopsis: [
      "ar ATScross ktimepnt, kfmod, iatsfile, ifn, kmylev, kbuflev, ipartials [, ipartialoffset, ipartialincr]",
    ],
    id: "ATScross",
    type: "opcode",
  },
  ATSinfo: {
    synopsis: ["idata ATSinfo iatsfile, ilocation"],
    id: "ATSinfo",
    type: "opcode",
  },
  ATSinterpread: {
    synopsis: ["kamp ATSinterpread kfreq"],
    id: "ATSinterpread",
    type: "opcode",
  },
  ATSpartialtap: {
    synopsis: ["kfrq, kamp ATSpartialtap ipartialnum"],
    id: "ATSpartialtap",
    type: "opcode",
  },
  ATSread: {
    synopsis: ["kfreq, kamp ATSread ktimepnt, iatsfile, ipartial"],
    id: "ATSread",
    type: "opcode",
  },
  ATSreadnz: {
    synopsis: ["kenergy ATSreadnz ktimepnt, iatsfile, iband"],
    id: "ATSreadnz",
    type: "opcode",
  },
  ATSsinnoi: {
    synopsis: [
      "ar ATSsinnoi ktimepnt, ksinlev, knzlev, kfmod, iatsfile, ipartials [, ipartialoffset, ipartialincr]",
    ],
    id: "ATSsinnoi",
    type: "opcode",
  },
  JackoAudioIn: {
    synopsis: ["asignal JackoAudioIn ScsoundPortName"],
    id: "JackoAudioIn",
    type: "opcode",
  },
  JackoAudioInConnect: {
    synopsis: ["JackoAudioInConnect SexternalPortName, ScsoundPortName"],
    id: "JackoAudioInConnect",
    type: "opcode",
  },
  JackoAudioOut: {
    synopsis: ["JackoAudioOut ScsoundPortName, asignal"],
    id: "JackoAudioOut",
    type: "opcode",
  },
  JackoAudioOutConnect: {
    synopsis: ["JackoAudioOutConnect ScsoundPortName, SexternalPortName"],
    id: "JackoAudioOutConnect",
    type: "opcode",
  },
  JackoFreewheel: {
    synopsis: ["JackoFreewheel [ienabled]"],
    id: "JackoFreewheel",
    type: "opcode",
  },
  JackoInfo: {synopsis: ["JackoInfo "], id: "JackoInfo", type: "opcode"},
  JackoInit: {
    synopsis: ["JackoInit ServerName, SclientName"],
    id: "JackoInit",
    type: "opcode",
  },
  JackoMidiInConnect: {
    synopsis: ["JackoMidiInConnect SexternalPortName, ScsoundPortName"],
    id: "JackoMidiInConnect",
    type: "opcode",
  },
  JackoMidiOut: {
    synopsis: [
      "JackoMidiOut ScsoundPortName, kstatus, kchannel, kdata1[, kdata2]",
    ],
    id: "JackoMidiOut",
    type: "opcode",
  },
  JackoMidiOutConnect: {
    synopsis: ["JackoMidiOutConnect ScsoundPortName, SexternalPortName"],
    id: "JackoMidiOutConnect",
    type: "opcode",
  },
  JackoNoteOut: {
    synopsis: [
      "JackoNoteOut ScsoundPortName, kstatus, kchannel, kdata1[, kdata2]",
    ],
    id: "JackoNoteOut",
    type: "opcode",
  },
  JackoOn: {synopsis: ["JackoOn [iactive] "], id: "JackoOn", type: "opcode"},
  JackoTransport: {
    synopsis: ["JackoTransport kcommand, [kposition]"],
    id: "JackoTransport",
    type: "opcode",
  },
  link_beat_force: {
    synopsis: [
      "link_beat_force i_peer, k_beat [, k_at_time_seconds [, k_quantum ]] ",
    ],
    id: "link_beat_force",
    type: "opcode",
  },
  link_beat_get: {
    synopsis: ["i_peer link_create [i_bpm]"],
    id: "link_create",
    type: "opcode",
  },
  link_enable: {
    synopsis: [" ableton_link_enable i_peer [, k_enable]"],
    id: "link_enable",
    type: "opcode",
  },
  link_is_enabled: {
    synopsis: ["k_is_enabled link_is_enabled i_peer"],
    id: "link_is_enabled",
    type: "opcode",
  },
  link_peers: {
    synopsis: ["k_count link_peers i_peer"],
    id: "link_peers",
    type: "opcode",
  },
  link_tempo_get: {
    synopsis: ["k_bpm link_tempo_get i_peer"],
    id: "link_tempo_get",
    type: "opcode",
  },
  link_tempo_set: {
    synopsis: ["link_tempo_set i_peer, k_bpm [, k_at_time_seconds]"],
    id: "link_tempo_set",
    type: "opcode",
  },
  OSCbundle: {
    synopsis: [
      "OSCbundle kwhen, ihost, iport, Sdest[], Stype[],kArgs[][][,isize]",
    ],
    id: "OSCbundle",
    type: "opcode",
  },
  OSCcount: {synopsis: ["kans OSCcount"], id: "OSCcount", type: "opcode"},
  OSCinit: {
    synopsis: ["ihandle OSCinit iport"],
    id: "OSCinit",
    type: "opcode",
  },
  OSCinitM: {
    synopsis: ["ihandle OSCinitM Sgroup, iport"],
    id: "OSCinitM",
    type: "opcode",
  },
  OSClisten: {
    synopsis: [
      "kans OSClisten ihandle, idest, itype [, xdata1, xdata2, ...]",
      "kans, kdata[] OSClisten ihandle, idest, itype",
    ],
    id: "OSClisten",
    type: "opcode",
  },
  OSCraw: {
    synopsis: ["Smess[],klen OSCraw iport"],
    id: "OSCraw",
    type: "opcode",
  },
  OSCsend: {
    synopsis: [
      "OSCsend kwhen, ihost, iport, idestination[, itype , xdata1, xdata2, ...]",
    ],
    id: "OSCsend",
    type: "opcode",
  },
  STKBandedWG: {
    synopsis: [
      "asignal STKBandedWG ifrequency, iamplitude, [kpress, kv1[, kmot, kv2[, klfo, kv3[, klfodepth, kv4[, kvel, kv5[, kstrk, kv6[, kinstr, kv7]]]]]]]",
    ],
    id: "STKBandedWG",
    type: "opcode",
  },
  STKBeeThree: {
    synopsis: [
      "asignal STKBeeThree ifrequency, iamplitude, [kop4, kv1[, kop3, kv2[, klfo, kv3[, klfodepth, kv4[, kadsr, kv5]]]]]",
    ],
    id: "STKBeeThree",
    type: "opcode",
  },
  STKBlowBotl: {
    synopsis: [
      "asignal STKBlowBotl ifrequency, iamplitude, [knoise, kv1[, klfo, kv2[, klfodepth, kv3[, kvol, kv4]]]]",
    ],
    id: "STKBlowBotl",
    type: "opcode",
  },
  STKBlowHole: {
    synopsis: [
      "asignal STKBlowHole ifrequency, iamplitude, [kreed, kv1[, knoise, kv2[, khole, kv3[, kreg, kv4[, kbreath, kv5]]]]]",
    ],
    id: "STKBlowHole",
    type: "opcode",
  },
  STKBowed: {
    synopsis: [
      "asignal STKBowed ifrequency, iamplitude, [kpress, kv1[, kpos, kv2[, klfo, kv3[, klfodepth, kv4[, kvol, kv5]]]]]",
    ],
    id: "STKBowed",
    type: "opcode",
  },
  STKBrass: {
    synopsis: [
      "asignal STKBrass ifrequency, iamplitude, [klip, kv1[, kslide, kv2[, klfo, kv3[, klfodepth, kv4[, kvol, kv5]]]]]",
    ],
    id: "STKBrass",
    type: "opcode",
  },
  STKClarinet: {
    synopsis: [
      "asignal STKClarinet ifrequency, iamplitude, [kstiff, kv1[, knoise, kv2[, klfo, kv3[, klfodepth, kv4[, kbreath, kv5]]]]]",
    ],
    id: "STKClarinet",
    type: "opcode",
  },
  STKDrummer: {
    synopsis: ["asignal STKDrummer ifrequency, iamplitude"],
    id: "STKDrummer",
    type: "opcode",
  },
  STKFMVoices: {
    synopsis: [
      "asignal STKFMVoices ifrequency, iamplitude, [kvowel, kv1[, kspec, kv2[, klfo, kv3[, klfodepth, kv4[, kadsr, kv5]]]]]",
    ],
    id: "STKFMVoices",
    type: "opcode",
  },
  STKFlute: {
    synopsis: [
      "asignal STKFlute ifrequency, iamplitude, [kjet, kv1[, knoise, kv2[, klfo, kv3[, klfodepth, kv4[, kbreath, kv5]]]]]",
    ],
    id: "STKFlute",
    type: "opcode",
  },
  STKHevyMetl: {
    synopsis: [
      "asignal STKHevyMetl ifrequency, iamplitude, [kmod, kv1[, kcross, kv2[, klfo, kv3[, klfodepth, kv4[, kadsr, kv5]]]]]",
    ],
    id: "STKHevyMetl",
    type: "opcode",
  },
  STKMandolin: {
    synopsis: [
      "asignal STKMandolin ifrequency, iamplitude, [kbody, kv1[, kpos, kv2[, ksus, kv3[, kdetune, kv4[, kmic, kv5]]]]]",
    ],
    id: "STKMandolin",
    type: "opcode",
  },
  STKModalBar: {
    synopsis: [
      "asignal STKModalBar ifrequency, iamplitude, [khard, kv1[, kpos, kv2[, klfo, kv3[, klfodepth, kv4[, kmix, kv5[, kvol, kv6[, kinstr, kv7]]]]]]]",
    ],
    id: "STKModalBar",
    type: "opcode",
  },
  STKMoog: {
    synopsis: [
      "asignal STKMoog ifrequency, iamplitude, [kq, kv1[, krate, kv2[, klfo, kv3[, klfodepth, kv4[, kvol, kv5]]]]]",
    ],
    id: "STKMoog",
    type: "opcode",
  },
  STKPercFlut: {
    synopsis: [
      "asignal STKPercFlut ifrequency, iamplitude, [kmod, kv1[, kcross, kv2[, klfo, kv3[, klfodepth, kv4[, kadsr, kv5]]]]]",
    ],
    id: "STKPercFlut",
    type: "opcode",
  },
  STKPlucked: {
    synopsis: ["asignal STKPlucked ifrequency, iamplitude"],
    id: "STKPlucked",
    type: "opcode",
  },
  STKResonate: {
    synopsis: [
      "asignal STKResonate ifrequency, iamplitude, [kfreq, kv1[, kpole, kv2[, knotch, kv3[, kzero, kv4[, kenv, kv5]]]]]",
    ],
    id: "STKResonate",
    type: "opcode",
  },
  STKRhodey: {
    synopsis: [
      "asignal STKRhodey ifrequency, iamplitude, [kmod, kv1[, kcross, kv2[, klfo, kv3[, klfodepth, kv4[, kadsr, kv5]]]]]",
    ],
    id: "STKRhodey",
    type: "opcode",
  },
  STKSaxofony: {
    synopsis: [
      "asignal STKSaxofony ifrequency, iamplitude, [kstiff, kv1[, kapert, kv2[, kblow, kv3[, knoise, kv4[, klfo, kv5[, klfodepth, kv6[, kbreath, kv7]]]]]]]",
    ],
    id: "STKSaxofony",
    type: "opcode",
  },
  STKShakers: {
    synopsis: [
      "asignal STKShakers ifrequency, iamplitude, [kenerg, kv1[, kdecay, kv2[, kshake, kv3[, knum, kv4[, kres, kv5[, kinstr, kv6]]]]]]",
    ],
    id: "STKShakers",
    type: "opcode",
  },
  STKSimple: {
    synopsis: [
      "asignal STKSimple ifrequency, iamplitude, [kpos, kv1[, kcross, kv2[, kenv, kv3[, kgain, kv4]]]]",
    ],
    id: "STKSimple",
    type: "opcode",
  },
  STKSitar: {
    synopsis: ["asignal STKSitar ifrequency, iamplitude"],
    id: "STKSitar",
    type: "opcode",
  },
  STKStifKarp: {
    synopsis: [
      "asignal STKStifKarp ifrequency, iamplitude, [kpos, kv1[, ksus, kv2[, kstretch, kv3]]]",
    ],
    id: "STKStifKarp",
    type: "opcode",
  },
  STKTubeBell: {
    synopsis: [
      "asignal STKTubeBell ifrequency, iamplitude, [kmod, kv1[, kcross, kv2[, klfo, kv3[, klfodepth, kv4[, kadsr, kv5]]]]]",
    ],
    id: "STKTubeBell",
    type: "opcode",
  },
  STKVoicForm: {
    synopsis: [
      "asignal STKVoicForm ifrequency, iamplitude, [kmix, kv1[, ksel, kv2[, klfo, kv3[, klfodepth, kv4[, kloud, kv5]]]]]",
    ],
    id: "STKVoicForm",
    type: "opcode",
  },
  STKWhistle: {
    synopsis: [
      "asignal STKWhistle ifrequency, iamplitude, [kmod, kv1[, knoise, kv2[, kfipfreq, kv3[, kfipgain, kv4[, kvol, kv5]]]]]",
    ],
    id: "STKWhistle",
    type: "opcode",
  },
  STKWurley: {
    synopsis: [
      "asignal STKWurley ifrequency, iamplitude, [kmod, kv1[, kcross, kv2[, klfo, kv3[, klfodepth, kv4[, kadsr, kv5]]]]]",
    ],
    id: "STKWurley",
    type: "opcode",
  },
  abetarand: {synopsis: [], id: "abetarand", type: "opcode"},
  abexprnd: {synopsis: [], id: "abexprnd", type: "opcode"},
  abs: {
    synopsis: ["abs(x) (no rate restriction)", "abs(k/i[]) (k- or i-arrays )"],
    id: "abs",
    type: "opcode",
  },
  acauchy: {synopsis: [], id: "acauchy", type: "opcode"},
  active: {
    synopsis: [
      "ir active insnum [,iopt [,inorel]]",
      "ir active Sinsname [,iopt [,inorel]]",
      "kres active kinsnum [,iopt [,inorel]]",
    ],
    id: "active",
    type: "opcode",
  },
  "+": {
    synopsis: ["+a (no rate restriction)", "a + b (no rate restriction)"],
    id: "adds",
    type: "opcode",
  },
  adsr: {
    synopsis: [
      "ares adsr iatt, idec, islev, irel [, idel]",
      "kres adsr iatt, idec, islev, irel [, idel]",
    ],
    id: "adsr",
    type: "opcode",
  },
  adsyn: {
    synopsis: ["ares adsyn kamod, kfmod, ksmod, ifilcod"],
    id: "adsyn",
    type: "opcode",
  },
  adsynt: {
    synopsis: ["ares adsynt kamp, kcps, iwfn, ifreqfn, iampfn, icnt [, iphs]"],
    id: "adsynt",
    type: "opcode",
  },
  adsynt2: {
    synopsis: ["ar adsynt2 kamp, kcps, iwfn, ifreqfn, iampfn, icnt [, iphs]"],
    id: "adsynt2",
    type: "opcode",
  },
  aexprand: {synopsis: [], id: "aexprand", type: "opcode"},
  aftouch: {
    synopsis: ["kaft aftouch [imin] [, imax]"],
    id: "aftouch",
    type: "opcode",
  },
  agauss: {synopsis: [], id: "agauss", type: "opcode"},
  agogobel: {synopsis: [], id: "agogobel", type: "opcode"},
  alinrand: {synopsis: [], id: "alinrand", type: "opcode"},
  allpole: {
    synopsis: ["ares allpole asig, kCoef[]"],
    id: "allpole",
    type: "opcode",
  },
  alpass: {
    synopsis: ["ares alpass asig, xrvt, ilpt [, iskip] [, insmps]"],
    id: "alpass",
    type: "opcode",
  },
  alwayson: {
    synopsis: [" alwayson Tinstrument [p4, ..., pn]"],
    id: "alwayson",
    type: "opcode",
  },
  ampdb: {
    synopsis: ["ampdb(x) (no rate restriction)"],
    id: "ampdb",
    type: "opcode",
  },
  ampdbfs: {
    synopsis: ["ampdbfs(x) (no rate restriction)"],
    id: "ampdbfs",
    type: "opcode",
  },
  ampmidi: {
    synopsis: ["iamp ampmidi iscal [, ifn]"],
    id: "ampmidi",
    type: "opcode",
  },
  ampmidicurve: {
    synopsis: [
      "igain ampmidicurve ivelocity, idynamicrange, iexponent",
      "kgain ampmidicurve kvelocity, kdynamicrange, kexponent",
    ],
    id: "ampmidicurve",
    type: "opcode",
  },
  ampmidid: {
    synopsis: [
      "iamplitude ampmidid ivelocity, idecibels",
      "kamplitude ampmidid kvelocity, idecibels",
    ],
    id: "ampmidid",
    type: "opcode",
  },
  apcauchy: {synopsis: [], id: "apcauchy", type: "opcode"},
  apoisson: {synopsis: [], id: "apoisson", type: "opcode"},
  apoleparams: {
    synopsis: ["kPar[]apoleparams kCoef[] "],
    id: "apoleparams",
    type: "opcode",
  },
  apow: {synopsis: [], id: "apow", type: "opcode"},
  arduinoRead: {
    synopsis: ["kval arduinoRead iPort, iStream[, iSmooth]"],
    id: "arduinoRead",
    type: "opcode",
  },
  arduinoStart: {
    synopsis: ["iPort arduinoStart SPortName [, ibaudRate]"],
    id: "arduinoStart",
    type: "opcode",
  },
  arduinoStop: {
    synopsis: [" arduinoStop iPort"],
    id: "arduinoStop",
    type: "opcode",
  },
  areson: {
    synopsis: [
      "ares areson asig, kcf, kbw [, iscl] [, iskip]",
      "ares areson asig, acf, kbw [, iscl] [, iskip]",
      "ares areson asig, kcf, abw [, iscl] [, iskip]",
      "ares areson asig, acf, abw [, iscl] [, iskip]",
    ],
    id: "areson",
    type: "opcode",
  },
  aresonk: {
    synopsis: ["kres aresonk ksig, kcf, kbw [, iscl] [, iskip]"],
    id: "aresonk",
    type: "opcode",
  },
  array: {
    synopsis: ["karray[] array ival1, ival2,.....ivaln"],
    id: "array",
    type: "opcode",
  },
  "=": {
    synopsis: [
      "ares = xarg",
      "ires = iarg",
      "kres = karg",
      "ires, ... = iarg, ...",
      "kres, ... = karg, ...",
      "table [ kval] = karg",
    ],
    id: "assign",
    type: "opcode",
  },
  atone: {
    synopsis: ["ares atone asig, khp [, iskip]"],
    id: "atone",
    type: "opcode",
  },
  atonek: {
    synopsis: ["kres atonek ksig, khp [, iskip]"],
    id: "atonek",
    type: "opcode",
  },
  atonex: {
    synopsis: [
      "ares atonex asig, khp [, inumlayer] [, iskip]",
      "ares atonex asig, ahp [, inumlayer] [, iskip]",
    ],
    id: "atonex",
    type: "opcode",
  },
  atrirand: {synopsis: [], id: "atrirand", type: "opcode"},
  aunirand: {synopsis: [], id: "aunirand", type: "opcode"},
  aweibull: {synopsis: [], id: "aweibull", type: "opcode"},
  babo: {
    synopsis: [
      "a1, a2 babo asig, ksrcx, ksrcy, ksrcz, irx, iry, irz [, idiff] [, ifno]",
    ],
    id: "babo",
    type: "opcode",
  },
  balance: {
    synopsis: ["ares balance asig, acomp [, ihp] [, iskip]"],
    id: "balance",
    type: "opcode",
  },
  balance2: {
    synopsis: ["ares balance2 asig, acomp [, ihp] [, iskip]"],
    id: "balance2",
    type: "opcode",
  },
  bamboo: {
    synopsis: [
      "ares bamboo kamp, idettack [, inum] [, idamp] [, imaxshake] [, ifreq] [, ifreq1] [, ifreq2]",
    ],
    id: "bamboo",
    type: "opcode",
  },
  barmodel: {
    synopsis: [
      "ares barmodel kbcL, kbcR, iK, ib, kscan, iT30, ipos, ivel, iwid",
    ],
    id: "barmodel",
    type: "opcode",
  },
  bbcutm: {
    synopsis: [
      "a1 bbcutm asource, ibps, isubdiv, ibarlength, iphrasebars, inumrepeats [, istutterspeed] [, istutterchance] [, ienvchoice ]",
    ],
    id: "bbcutm",
    type: "opcode",
  },
  bbcuts: {
    synopsis: [
      "a1,a2 bbcuts asource1, asource2, ibps, isubdiv, ibarlength, iphrasebars, inumrepeats [, istutterspeed] [, istutterchance] [, ienvchoice]",
    ],
    id: "bbcuts",
    type: "opcode",
  },
  beadsynt: {
    synopsis: [
      "aout beadsynt kFreqs[], kAmps[], kBws[] [, inumosc, iflags, kfreq, kbw, ifn, iphs ]",
      "aout beadsynt ifreqft, iampft, ibwft, inumosc [, iflags, kfreq, kbw, ifn, iphs ]",
    ],
    id: "beadsynt",
    type: "opcode",
  },
  beosc: {
    synopsis: ["aout beosc xfreq, kbw [, ifn, iphs, inoisetype ]"],
    id: "beosc",
    type: "opcode",
  },
  betarand: {
    synopsis: [
      "ares betarand krange, kalpha, kbeta",
      "ires betarand krange, kalpha, kbeta",
      "kres betarand krange, kalpha, kbeta",
    ],
    id: "betarand",
    type: "opcode",
  },
  bexprnd: {
    synopsis: [
      "ares bexprnd krange",
      "ires bexprnd krange",
      "kres bexprnd krange",
    ],
    id: "bexprnd",
    type: "opcode",
  },
  bformdec: {
    synopsis: [
      "ao1, ao2 bformdec isetup, aw, ax, ay, az [, ar, as, at, au, av [, abk, al, am, an, ao, ap, aq]]",
      "ao1, ao2, ao3, ao4 bformdec isetup, aw, ax, ay, az [, ar, as, at, au, av [, abk, al, am, an, ao, ap, aq]]",
      "ao1, ao2, ao3, ao4, ao5 bformdec isetup, aw, ax, ay, az [, ar, as, at, au, av [, abk, al, am, an, ao, ap, aq]]",
      "ao1, ao2, ao3, ao4, ao5, ao6, ao7, ao8 bformdec isetup, aw, ax, ay, az [, ar, as, at, au, av [, abk, al, am, an, ao, ap, aq]]]",
    ],
    id: "bformdec",
    type: "opcode",
  },
  bformdec1: {
    synopsis: [
      "ao1, ao2 bformdec1 isetup, aw, ax, ay, az [, ar, as, at, au, av [, abk, al, am, an, ao, ap, aq]]",
      "ao1, ao2, ao3, ao4 bformdec1 isetup, aw, ax, ay, az [, ar, as, at, au, av [, abk, al, am, an, ao, ap, aq]]",
      "ao1, ao2, ao3, ao4, ao5 bformdec1 isetup, aw, ax, ay, az [, ar, as, at, au, av [, abk, al, am, an, ao, ap, aq]]",
      "ao1, ao2, ao3, ao4, ao5, ao6, ao7, ao8 bformdec1 isetup, aw, ax, ay, az [, ar, as, at, au, av [, abk, al, am, an, ao, ap, aq]]]",
      "aout[] bformdec1 isetup, abform[]",
    ],
    id: "bformdec1",
    type: "opcode",
  },
  bformenc: {
    synopsis: [
      "aw, ax, ay, az bformenc asig, kalpha, kbeta, kord0, kord1",
      "aw, ax, ay, az, ar, as, at, au, av bformenc asig, kalpha, kbeta, kord0, kord1 , kord2",
      "aw, ax, ay, az, ar, as, at, au, av, ak, al, am, an, ao, ap, aq bformenc asig, kalpha, kbeta, kord0, kord1, kord2, kord3",
    ],
    id: "bformenc",
    type: "opcode",
  },
  bformenc1: {
    synopsis: [
      "aw, ax, ay, az bformenc1 asig, kalpha, kbeta",
      "aw, ax, ay, az, ar, as, at, au, av bformenc1 asig, kalpha, kbeta",
      "aw, ax, ay, az, ar, as, at, au, av, ak, al, am, an, ao, ap, aq bformenc1 asig, kalpha, kbeta",
      "aarray[] bformenc1 asig, kalpha, kbeta",
    ],
    id: "bformenc1",
    type: "opcode",
  },
  binit: {
    synopsis: ["fsig binit fin, isize"],
    id: "binit",
    type: "opcode",
  },
  biquad: {
    synopsis: ["ares biquad asig, kb0, kb1, kb2, ka0, ka1, ka2 [, iskip]"],
    id: "biquad",
    type: "opcode",
  },
  biquada: {
    synopsis: ["ares biquada asig, ab0, ab1, ab2, aa0, aa1, aa2 [, iskip]"],
    id: "biquada",
    type: "opcode",
  },
  birnd: {
    synopsis: ["birnd(x) (init- or control-rate only)"],
    id: "birnd",
    type: "opcode",
  },
  bob: {
    synopsis: ["asig bob ain, xcf, xres, xsat [, iosamps, istor]"],
    id: "bob",
    type: "opcode",
  },
  bpf: {
    synopsis: [
      "ky bpf kx, kx1, ky1, kx2, ..., kxn, kyn",
      "iy bpf ix, ix1, iy1, ix2, ..., ixn, iyn",
      "kys[] bpf kxs[], kx1, ky1, kx2, ..., kxn, kyn",
      "iys[] bpf ixs[], ix1, iy1, ix2, ..., ixn, iyn",
      "ky bpf kx, kxs[], kys[]",
      "iy bpf ix, ixs[], iys[]",
      "ay bpf ax, kx1, ky1, kx2, ..., kxn, kyn",
      "ay bpf ax, kxs[], kys[]",
      "ky, kw bpf kx, kxs[], kys[], kws[]",
    ],
    id: "bpf",
    type: "opcode",
  },
  bpfcos: {
    synopsis: [
      "ky bpfcos kx, kx1, ky1, kx2, ..., kxn, kyn",
      "kys[] bpfcos kxs[], kx1, ky1, kx2, ..., kxn, kyn",
      "ky bpfcos kx, kxs[], kys[]",
      "ky bpfcos kx, ixs[], iys[]",
      "ky, kz bpfcos kx, kxs[], kys[], kzs[] ",
      "ky, kz bpfcos kx, ixs[], iys[], izs[] ",
      "kys[] bpfcos kxs[], kx1, ky1, kx2, ..., kxn, kyn",
      "ky bpfcos kx, ixs[], iys[]",
      "ky, kz bpfcos kx, kxs[], kys[], kzs[] ",
    ],
    id: "bpfcos",
    type: "opcode",
  },
  bqrez: {
    synopsis: ["ares bqrez asig, xfco, xres [, imode] [, iskip]"],
    id: "bqrez",
    type: "opcode",
  },
  butbp: {
    synopsis: ["ares butbp asig, kfreq, kband [, iskip]"],
    id: "butbp",
    type: "opcode",
  },
  butbr: {
    synopsis: ["ares butbr asig, kfreq, kband [, iskip]"],
    id: "butbr",
    type: "opcode",
  },
  buthp: {
    synopsis: [
      "ares buthp asig, kfreq [, iskip]",
      "ares buthp asig, afreq [, iskip]",
    ],
    id: "buthp",
    type: "opcode",
  },
  butlp: {
    synopsis: [
      "ares butlp asig, kfreq [, iskip]",
      "ares butlp asig, afreq [, iskip]",
    ],
    id: "butlp",
    type: "opcode",
  },
  butterbp: {
    synopsis: ["ares butterbp asig, xfreq, xband [, iskip]"],
    id: "butterbp",
    type: "opcode",
  },
  butterbr: {
    synopsis: ["ares butterbr asig, xfreq, xband [, iskip]"],
    id: "butterbr",
    type: "opcode",
  },
  butterhp: {
    synopsis: [
      "ares butterhp asig, kfreq [, iskip]",
      "ares butterhp asig, afreq [, iskip]",
    ],
    id: "butterhp",
    type: "opcode",
  },
  butterlp: {
    synopsis: [
      "ares butterlp asig, kfreq [, iskip]",
      "ares butterlp asig, afreq [, iskip]",
    ],
    id: "butterlp",
    type: "opcode",
  },
  button: {synopsis: ["kres button knum"], id: "button", type: "opcode"},
  buzz: {
    synopsis: ["ares buzz xamp, xcps, knh, ifn [, iphs]"],
    id: "buzz",
    type: "opcode",
  },
  c2r: {synopsis: ["kout[] c2r kin[]"], id: "c2r", type: "opcode"},
  cabasa: {
    synopsis: ["ares cabasa iamp, idettack [, inum] [, idamp] [, imaxshake]"],
    id: "cabasa",
    type: "opcode",
  },
  cauchy: {
    synopsis: [
      "ares cauchy kalpha",
      "ires cauchy kalpha",
      "kres cauchy kalpha",
    ],
    id: "cauchy",
    type: "opcode",
  },
  cauchyi: {
    synopsis: [
      "ares cauchyi klambda, xamp, xcps",
      "ires cauchyi klambda, xamp, xcps",
      "kres cauchyi klambda, xamp, xcps",
    ],
    id: "cauchyi",
    type: "opcode",
  },
  cbrt: {
    synopsis: ["ires[] cbrt iarg", "kres[] cbrt karg"],
    id: "cbrt",
    type: "opcode",
  },
  ceil: {
    synopsis: [
      "ceil(x) (init-, control-, or audio-rate arg allowed)",
      "ceil(k/i[]) (k- or i-arrays )",
    ],
    id: "ceil",
    type: "opcode",
  },
  cell: {
    synopsis: [
      "cell ktrig, kreinit, ioutFunc, initStateFunc, iRuleFunc, ielements",
    ],
    id: "cell",
    type: "opcode",
  },
  cent: {synopsis: ["cent(x) "], id: "cent", type: "opcode"},
  centroid: {
    synopsis: ["kcent centroid asig, ktrig, ifftsize"],
    id: "centroid",
    type: "opcode",
  },
  ceps: {
    synopsis: ["keps[] ceps kmags[][, icoefs]"],
    id: "ceps",
    type: "opcode",
  },
  cepsinv: {
    synopsis: ["kenv cepsinv keps[]"],
    id: "cepsinv",
    type: "opcode",
  },
  cggoto: {
    synopsis: ["cggoto condition, label"],
    id: "cggoto",
    type: "opcode",
  },
  chanctrl: {
    synopsis: [
      "ival chanctrl ichnl, ictlno [, ilow] [, ihigh]",
      "kval chanctrl ichnl, ictlno [, ilow] [, ihigh]",
    ],
    id: "chanctrl",
    type: "opcode",
  },
  changed: {
    synopsis: ["ktrig changed kvar1 [, kvar2,..., kvarN]"],
    id: "changed",
    type: "opcode",
  },
  changed2: {
    synopsis: [
      "ktrig changed2 kvar1 [, kvar2,..., kvarN]",
      "ktrig changed2 karr[]",
      "ktrig changed2 aarr[]",
    ],
    id: "changed2",
    type: "opcode",
  },
  chani: {
    synopsis: ["kval chani kchan", "aval chani kchan"],
    id: "chani",
    type: "opcode",
  },
  chano: {
    synopsis: ["chano kval, kchan", "chano aval, kchan"],
    id: "chano",
    type: "opcode",
  },
  chebyshevpoly: {
    synopsis: ["aout chebyshevpoly ain, k0 [, k1 [, k2 [...]]]"],
    id: "chebyshevpoly",
    type: "opcode",
  },
  checkbox: {
    synopsis: ["kres checkbox knum"],
    id: "checkbox",
    type: "opcode",
  },
  chn: {
    synopsis: [
      " chn_k Sname, imode[, itype, idflt, imin, ima, ix, iy, iwidth, iheight, Sattributes]",
      " chn_a Sname, imode",
      " chn_S Sname, imode",
      " chn_S Sname, Smode",
    ],
    id: "chn",
    type: "opcode",
  },
  chnclear: {
    synopsis: ["chnclear Sname1[, Sname2,...]"],
    id: "chnclear",
    type: "opcode",
  },
  chnexport: {
    synopsis: [
      "gival chnexport Sname, imode[, itype, idflt, imin, imax]",
      "gkval chnexport Sname, imode[, itype, idflt, imin, imax]",
      "gaval chnexport Sname, imode",
      "gSval chnexport Sname, imode",
    ],
    id: "chnexport",
    type: "opcode",
  },
  chnget: {
    synopsis: [
      "ival chnget Sname",
      "kval chnget Sname",
      "aval chnget Sname",
      "Sval chnget Sname",
      "Sval chngetks Sname",
      "ival[] chngeti Sname[]",
      "kval[] chngetk Sname[]",
      "aval[] chngeta Sname[]",
      "Sval[] chngets Sname[]",
    ],
    id: "chnget",
    type: "opcode",
  },
  chnmix: {synopsis: ["chnmix aval, Sname"], id: "chnmix", type: "opcode"},
  chnparams: {
    synopsis: ["itype, imode, ictltype, idflt, imin, imax chnparams Sname"],
    id: "chnparams",
    type: "opcode",
  },
  chnset: {
    synopsis: [
      "chnset ival, Sname",
      "chnset kval, Sname",
      "chnset aval, Sname",
      "chnset Sval, Sname",
      "chnsetks Sval, Sname",
      "chnseti ival[], []Sname",
      "chnsetk kval[], []Sname",
      "chnseta aval[], []Sname",
      "chnsets Sval[], []Sname",
    ],
    id: "chnset",
    type: "opcode",
  },
  chuap: {
    synopsis: [
      "aI3, aV2, aV1 chuap kL, kR0, kC1, kG, kGa, kGb, kE, kC2, iI3, iV2, iV1, ktime_step",
    ],
    id: "chuap",
    type: "opcode",
  },
  cigoto: {
    synopsis: ["cigoto condition, label"],
    id: "cigoto",
    type: "opcode",
  },
  ckgoto: {
    synopsis: ["ckgoto condition, label"],
    id: "ckgoto",
    type: "opcode",
  },
  clear: {
    synopsis: ["clear avar1 [, avar2] [, avar3] [...]"],
    id: "clear",
    type: "opcode",
  },
  clfilt: {
    synopsis: [
      "ares clfilt asig, kfreq, itype, inpol [, ikind] [, ipbr] [, isba] [, iskip]",
    ],
    id: "clfilt",
    type: "opcode",
  },
  clip: {
    synopsis: ["ares clip asig, imeth, ilimit [, iarg]"],
    id: "clip",
    type: "opcode",
  },
  clock: {synopsis: [], id: "clock", type: "opcode"},
  clockoff: {synopsis: ["clockoff inum"], id: "clockoff", type: "opcode"},
  clockon: {synopsis: ["clockon inum"], id: "clockon", type: "opcode"},
  cmp: {
    synopsis: [
      "aout cmp a1, S_operator, a2",
      "aout cmp a1, S_operator, kb",
      "kOut[] cmp kA[], S_operator, kb",
      "kOut[] cmp kA[], S_operator, kB[]",
      "kOut[] cmp k1, S_operator1, kIn[], S_operator2, k2",
    ],
    id: "cmp",
    type: "opcode",
  },
  cmplxprod: {
    synopsis: ["kout[] cmplxprod kin1[], kin2[]"],
    id: "cmplxprod",
    type: "opcode",
  },
  cngoto: {
    synopsis: ["cngoto condition, label"],
    id: "cngoto",
    type: "opcode",
  },
  cntDelete: {
    synopsis: ["kval cntDelete icnt"],
    id: "cntDelete",
    type: "opcode",
  },
  cntDelete_i: {
    synopsis: ["ival cntDelete_i icnt"],
    id: "cntDelete_i",
    type: "opcode",
  },
  cntCreate: {
    synopsis: ["icnt cntCreate [imax, imin, inc]"],
    id: "cntCreate",
    type: "opcode",
  },
  cntCycles: {
    synopsis: ["kval cntCycles icnt"],
    id: "cntCycles",
    type: "opcode",
  },
  cntRead: {synopsis: ["kval cntReadicnt"], id: "cntRead", type: "opcode"},
  cntReset: {synopsis: ["cntReseticnt"], id: "cntReset", type: "opcode"},
  cntState: {
    synopsis: ["kmax, kmin, kinc cntStateicnt"],
    id: "cntState",
    type: "opcode",
  },
  comb: {
    synopsis: ["ares comb asig, krvt, ilpt [, iskip] [, insmps]"],
    id: "comb",
    type: "opcode",
  },
  combinv: {
    synopsis: ["ares combinv asig, krvt, ilpt [, iskip] [, insmps]"],
    id: "combinv",
    type: "opcode",
  },
  compilecsd: {
    synopsis: ["ires compilecsd Sfilename"],
    id: "compilecsd",
    type: "opcode",
  },
  compileorc: {
    synopsis: ["ires compileorc Sfilename"],
    id: "compileorc",
    type: "opcode",
  },
  compilestr: {
    synopsis: ["ires compilestr Sorch"],
    id: "compilestr",
    type: "opcode",
  },
  compress: {
    synopsis: [
      "ar compress aasig, acsig, kthresh, kloknee, khiknee, kratio, katt, krel, ilook",
    ],
    id: "compress",
    type: "opcode",
  },
  compress2: {
    synopsis: [
      "ar compress2 aasig, acsig, kthresh, kloknee, khiknee, kratio, katt, krel, ilook",
    ],
    id: "compress2",
    type: "opcode",
  },
  connect: {
    synopsis: ["connect Tsource1, Soutlet1, Tsink1, Sinlet1"],
    id: "connect",
    type: "opcode",
  },
  control: {synopsis: ["kres control knum"], id: "control", type: "opcode"},
  convle: {synopsis: [], id: "convle", type: "opcode"},
  convolve: {
    synopsis: [
      "ar1 [, ar2] [, ar3] [, ar4] convolve ain, ifilcod [, ichannel]",
    ],
    id: "convolve",
    type: "opcode",
  },
  copya2ftab: {
    synopsis: [
      "copya2ftab kArray[], ktab [, koffset]",
      "copya2ftab iArray[], itab [, ioffset]",
    ],
    id: "copya2ftab",
    type: "opcode",
  },
  copyf2array: {
    synopsis: ["copyf2array tab, kftbl"],
    id: "copyf2array",
    type: "opcode",
  },
  cos: {
    synopsis: ["cos(x) (no rate restriction)", "cos(k/i[]) (k- or i-arrays )"],
    id: "cos",
    type: "opcode",
  },
  cosh: {
    synopsis: [
      "cosh(x) (no rate restriction)",
      "cosh(k/i[]) (k- or i-arrays )",
    ],
    id: "cosh",
    type: "opcode",
  },
  cosinv: {
    synopsis: [
      "cosinv(x) (no rate restriction)",
      "cosinv(k/i[]) (k- or i-arrays )",
    ],
    id: "cosinv",
    type: "opcode",
  },
  cosseg: {
    synopsis: [
      "ares cosseg ia, idur1, ib [, idur2] [, ic] [...]",
      "kres cosseg ia, idur1, ib [, idur2] [, ic] [...]",
    ],
    id: "cosseg",
    type: "opcode",
  },
  cossegb: {
    synopsis: [
      "ares cossegb ia, itim1, ib [, itim2] [, ic] [...]",
      "kres cossegb ia, itim1, ib [, itim2] [, ic] [...]",
    ],
    id: "cossegb",
    type: "opcode",
  },
  cossegr: {
    synopsis: [
      "ares cossegr ia, idur1, ib [, idur2] [, ic] [...], irel, iz",
      "kres cossegr ia, idur1, ib [, idur2] [, ic] [...], irel, iz",
    ],
    id: "cossegr",
    type: "opcode",
  },
  count: {synopsis: ["kval count icnt"], id: "count", type: "opcode"},
  count_i: {synopsis: ["ival count_i icnt"], id: "count_i", type: "opcode"},
  cps2pch: {
    synopsis: ["icps cps2pch ipch, iequal"],
    id: "cps2pch",
    type: "opcode",
  },
  cpsmidi: {synopsis: ["icps cpsmidi"], id: "cpsmidi", type: "opcode"},
  cpsmidib: {
    synopsis: ["icps cpsmidib [irange]", "kcps cpsmidib [irange]"],
    id: "cpsmidib",
    type: "opcode",
  },
  cpsmidinn: {
    synopsis: ["cpsmidinn (MidiNoteNumber) (init- or control-rate args only)"],
    id: "cpsmidinn",
    type: "opcode",
  },
  cpsoct: {
    synopsis: ["cpsoct (oct) (no rate restriction)"],
    id: "cpsoct",
    type: "opcode",
  },
  cpspch: {
    synopsis: ["cpspch (pch) (init- or control-rate args only)"],
    id: "cpspch",
    type: "opcode",
  },
  cpstmid: {synopsis: ["icps cpstmid ifn"], id: "cpstmid", type: "opcode"},
  cpstun: {
    synopsis: ["kcps cpstun ktrig, kindex, kfn"],
    id: "cpstun",
    type: "opcode",
  },
  cpstuni: {
    synopsis: ["icps cpstuni index, ifn"],
    id: "cpstuni",
    type: "opcode",
  },
  cpsxpch: {
    synopsis: ["icps cpsxpch ipch, iequal, irepeat, ibase"],
    id: "cpsxpch",
    type: "opcode",
  },
  cpumeter: {
    synopsis: ["ktot[,kcpu1, kcpu2,...]cpumeter ifreq"],
    id: "cpumeter",
    type: "opcode",
  },
  cpuprc: {
    synopsis: ["cpuprc insnum, ipercent", "cpuprc Sinsname, ipercent"],
    id: "cpuprc",
    type: "opcode",
  },
  cross2: {
    synopsis: ["ares cross2 ain1, ain2, isize, ioverlap, iwin, kbias"],
    id: "cross2",
    type: "opcode",
  },
  crossfm: {
    synopsis: [
      "a1, a2 crossfm xfrq1, xfrq2, xndx1, xndx2, kcps, ifn1, ifn2 [, iphs1] [, iphs2]",
      "a1, a2 crossfmi xfrq1, xfrq2, xndx1, xndx2, kcps, ifn1, ifn2 [, iphs1] [, iphs2]",
      "a1, a2 crosspm xfrq1, xfrq2, xndx1, xndx2, kcps, ifn1, ifn2 [, iphs1] [, iphs2]",
      "a1, a2 crosspmi xfrq1, xfrq2, xndx1, xndx2, kcps, ifn1, ifn2 [, iphs1] [, iphs2]",
      "a1, a2 crossfmpm xfrq1, xfrq2, xndx1, xndx2, kcps, ifn1, ifn2 [, iphs1] [, iphs2]",
      "a1, a2 crossfmpmi xfrq1, xfrq2, xndx1, xndx2, kcps, ifn1, ifn2 [, iphs1] [, iphs2]",
    ],
    id: "crossfm",
    type: "opcode",
  },
  crunch: {
    synopsis: ["ares crunch iamp, idettack [, inum] [, idamp] [, imaxshake]"],
    id: "crunch",
    type: "opcode",
  },
  ctrl14: {
    synopsis: [
      "idest ctrl14 ichan, ictlno1, ictlno2, imin, imax [, ifn]",
      "kdest ctrl14 ichan, ictlno1, ictlno2, kmin, kmax [, ifn]",
    ],
    id: "ctrl14",
    type: "opcode",
  },
  ctrl21: {
    synopsis: [
      "idest ctrl21 ichan, ictlno1, ictlno2, ictlno3, imin, imax [, ifn]",
      "kdest ctrl21 ichan, ictlno1, ictlno2, ictlno3, kmin, kmax [, ifn]",
    ],
    id: "ctrl21",
    type: "opcode",
  },
  ctrl7: {
    synopsis: [
      "idest ctrl7 ichan, ictlno, imin, imax [, ifn]",
      "kdest ctrl7 ichan, ictlno, kmin, kmax [, ifn]",
      "adest ctrl7 ichan, ictlno, kmin, kmax [, ifn] [, icutoff]",
    ],
    id: "ctrl7",
    type: "opcode",
  },
  ctrlinit: {
    synopsis: [
      "ctrlinit ichnl, ictlno1, ival1 [, ictlno2] [, ival2] [, ictlno3] [, ival3] [,...ival32]",
    ],
    id: "ctrlinit",
    type: "opcode",
  },
  cudanal: {
    synopsis: [
      "fsig cudanal ain, ifftsize, ioverlap, iwinsize, iwintype [, iformat] [, iinit]",
    ],
    id: "cudanal",
    type: "opcode",
  },
  cudasliding: {
    synopsis: ["asig cudasliding ain, amod, iwinsize"],
    id: "cudasliding",
    type: "opcode",
  },
  cudasynth: {
    synopsis: [
      "asig cudasynth kamp, kfreq, itab, iftab, iatab[, inum]",
      "asig cudasynth fsig, kamp, kfreq[, inum]",
      "asig cudasynth fsig",
    ],
    id: "cudasynth",
    type: "opcode",
  },
  cuserrnd: {
    synopsis: [
      "aout cuserrnd kmin, kmax, ktableNum",
      "iout cuserrnd imin, imax, itableNum",
      "kout cuserrnd kmin, kmax, ktableNum",
    ],
    id: "cuserrnd",
    type: "opcode",
  },
  dam: {
    synopsis: ["ares dam asig, kthreshold, icomp1, icomp2, irtime, iftime"],
    id: "dam",
    type: "opcode",
  },
  date: {
    synopsis: ["ir[, inano] date", "kr[, knano] date"],
    id: "date",
    type: "opcode",
  },
  dates: {synopsis: ["Sir dates [ itime]"], id: "dates", type: "opcode"},
  db: {synopsis: ["db(x)"], id: "db", type: "opcode"},
  dbamp: {
    synopsis: ["dbamp(x) (init-rate or control-rate args only)"],
    id: "dbamp",
    type: "opcode",
  },
  dbfsamp: {
    synopsis: ["dbfsamp(x) (init-rate or control-rate args only)"],
    id: "dbfsamp",
    type: "opcode",
  },
  dcblock: {
    synopsis: ["ares dcblock ain [, igain]"],
    id: "dcblock",
    type: "opcode",
  },
  dcblock2: {
    synopsis: ["ares dcblock2 ain [, iorder] [, iskip]"],
    id: "dcblock2",
    type: "opcode",
  },
  dconv: {
    synopsis: ["ares dconv asig, isize, ifn"],
    id: "dconv",
    type: "opcode",
  },
  dct: {
    synopsis: ["kout[] dct kin[]", "iout[] dct iin[]"],
    id: "dct",
    type: "opcode",
  },
  dctinv: {
    synopsis: ["kout[] dctinv kin[]", "iout[] dctinv iin[]"],
    id: "dctinv",
    type: "opcode",
  },
  macros: {
    synopsis: [
      "#define NAME # replacement text #",
      "#define NAME(a' b' c') # replacement text #",
    ],
    id: "define",
    type: "opcode",
  },
  deinterleave: {
    synopsis: ["kout1[], kout2[] deinterleave kin[]"],
    id: "deinterleave",
    type: "opcode",
  },
  delay: {
    synopsis: ["ares delay asig, idlt [, iskip]"],
    id: "delay",
    type: "opcode",
  },
  delay1: {
    synopsis: ["ares delay1 asig [, iskip]"],
    id: "delay1",
    type: "opcode",
  },
  delayk: {
    synopsis: [
      "kr delayk ksig, idel[, imode]",
      "kr vdel_k ksig, kdel, imdel[, imode]",
    ],
    id: "delayk",
    type: "opcode",
  },
  delayr: {
    synopsis: ["ares delayr idlt [, iskip]"],
    id: "delayr",
    type: "opcode",
  },
  delayw: {synopsis: ["delayw asig"], id: "delayw", type: "opcode"},
  deltap: {synopsis: ["ares deltap kdlt"], id: "deltap", type: "opcode"},
  deltape: {synopsis: ["ares deltap3 xdlt"], id: "deltap3", type: "opcode"},
  deltapi: {synopsis: ["ares deltapi xdlt"], id: "deltapi", type: "opcode"},
  deltapn: {
    synopsis: ["ares deltapn xnumsamps"],
    id: "deltapn",
    type: "opcode",
  },
  deltapx: {
    synopsis: ["aout deltapx adel, iwsize"],
    id: "deltapx",
    type: "opcode",
  },
  deltapxw: {
    synopsis: ["deltapxw ain, adel, iwsize"],
    id: "deltapxw",
    type: "opcode",
  },
  denorm: {
    synopsis: ["denorm a1[, a2[, a3[, ... ]]]"],
    id: "denorm",
    type: "opcode",
  },
  diff: {
    synopsis: ["ares diff asig [, iskip]", "kres diff ksig [, iskip]"],
    id: "diff",
    type: "opcode",
  },
  diode_ladder: {
    synopsis: ["asig diode_ladder ain, xcf, xk [, inlp, isaturation, istor]"],
    id: "diode_ladder",
    type: "opcode",
  },
  directory: {
    synopsis: ["SFiles[] directory SDirectory[, SExtention]"],
    id: "directory",
    type: "opcode",
  },
  diskgrain: {
    synopsis: [
      "asig diskgrain Sfname, kamp, kfreq, kpitch, kgrsize, kprate, ifun, iolaps [,imaxgrsize , ioffset]",
    ],
    id: "diskgrain",
    type: "opcode",
  },
  diskin: {
    synopsis: [
      "ar1 [, ar2 [, ar3 [, ... arN]]] diskin ifilcod[, kpitch[, iskiptim [, iwraparound[, iformat[, iskipinit]]]]]",
      "ar1[] diskin ifilcod[, kpitch[, iskiptim [, iwraparound[, iformat[, iskipinit]]]]]",
    ],
    id: "diskin",
    type: "opcode",
  },
  diskin2: {
    synopsis: [
      "a1[, a2[, ... aN]] diskin2 ifilcod[, kpitch[, iskiptim [, iwrap[, iformat[, iwsize[, ibufsize[, iskipinit]]]]]]]",
      "ar1[] diskin2 ifilcod[, kpitch[, iskiptim [, iwrap[, iformat[, iwsize[, ibufsize[, iskipinit]]]]]]]",
    ],
    id: "diskin2",
    type: "opcode",
  },
  dispfft: {
    synopsis: [
      "dispfft xsig, iprd, iwsiz [, iwtyp] [, idbout] [, iwtflg] [,imin] [,imax]",
    ],
    id: "dispfft",
    type: "opcode",
  },
  display: {
    synopsis: ["display xsig, iprd [, inprds] [, iwtflg]"],
    id: "display",
    type: "opcode",
  },
  distort: {
    synopsis: ["ar distort asig, kdist, ifn[, ihp, istor]"],
    id: "distort",
    type: "opcode",
  },
  distort1: {
    synopsis: [
      "ares distort1 asig, kpregain, kpostgain, kshape1, kshape2[, imode]",
    ],
    id: "distort1",
    type: "opcode",
  },
  "/": {
    synopsis: ["a / b (no rate restriction)"],
    id: "divides",
    type: "opcode",
  },
  divz: {
    synopsis: [
      "ares divz xa, xb, ksubst",
      "ires divz ia, ib, isubst",
      "kres divz ka, kb, ksubst",
      "...divz(ka, kb, ksubst)... (no rate restriction)",
    ],
    id: "divz",
    type: "opcode",
  },
  $NAME: {synopsis: ["$NAME "], id: "dollar", type: "opcode"},
  doppler: {
    synopsis: [
      "ashifted doppler asource, ksourceposition, kmicposition [, isoundspeed, ifiltercutoff]",
    ],
    id: "doppler",
    type: "opcode",
  },
  dot: {
    synopsis: [
      "kres/iresdot karr1[]/iarr1[], karr2[]/iarr2[] (k- or i-arrays )",
    ],
    id: "dot",
    type: "opcode",
  },
  downsamp: {
    synopsis: ["kres downsamp asig [, iwlen]"],
    id: "downsamp",
    type: "opcode",
  },
  dripwater: {
    synopsis: [
      "ares dripwater kamp, idettack [, inum] [, idamp] [, imaxshake] [, ifreq] [, ifreq1] [, ifreq2]",
    ],
    id: "dripwater",
    type: "opcode",
  },
  dssiactivate: {
    synopsis: ["dssiactivate ihandle, ktoggle "],
    id: "dssiactivate",
    type: "opcode",
  },
  dssiaudio: {
    synopsis: [
      "[aout1, aout2, ..., aout9] dssiaudio ihandle, [ain1, ain2, ..., ain9]",
    ],
    id: "dssiaudio",
    type: "opcode",
  },
  dssictls: {
    synopsis: ["dssictls ihandle, iport, kvalue, ktrigger "],
    id: "dssictls",
    type: "opcode",
  },
  dssiinit: {
    synopsis: ["ihandle dssiinit ilibraryname, iplugindex [, iverbose] "],
    id: "dssiinit",
    type: "opcode",
  },
  dssilist: {synopsis: ["dssilist"], id: "dssilist", type: "opcode"},
  dumpk: {
    synopsis: ["dumpk ksig, ifilname, iformat, iprd"],
    id: "dumpk",
    type: "opcode",
  },
  dumpk2: {
    synopsis: ["dumpk2 ksig1, ksig2, ifilname, iformat, iprd"],
    id: "dumpk2",
    type: "opcode",
  },
  dumpk3: {
    synopsis: ["dumpk3 ksig1, ksig2, ksig3, ifilname, iformat, iprd"],
    id: "dumpk3",
    type: "opcode",
  },
  dumpk4: {
    synopsis: ["dumpk4 ksig1, ksig2, ksig3, ksig4, ifilname, iformat, iprd"],
    id: "dumpk4",
    type: "opcode",
  },
  duserrnd: {
    synopsis: [
      "aout duserrnd ktableNum",
      "iout duserrnd itableNum",
      "kout duserrnd ktableNum",
    ],
    id: "duserrnd",
    type: "opcode",
  },
  dust: {
    synopsis: ["ares dust kamp, kdensity", "kres dust kamp, kdensity"],
    id: "dust",
    type: "opcode",
  },
  dust2: {
    synopsis: ["ares dust2 kamp, kdensity", "kres dust2 kamp, kdensity"],
    id: "dust2",
    type: "opcode",
  },
  else: {synopsis: ["else"], id: "else", type: "opcode"},
  elseif: {synopsis: ["elseif xa R xb then"], id: "elseif", type: "opcode"},
  endif: {synopsis: ["endif"], id: "endif", type: "opcode"},
  endin: {synopsis: ["endin"], id: "endin", type: "opcode"},
  endop: {synopsis: ["endop"], id: "endop", type: "opcode"},
  envlpx: {
    synopsis: [
      "ares envlpx xamp, irise, idur, idec, ifn, iatss, iatdec [, ixmod]",
      "kres envlpx kamp, irise, idur, idec, ifn, iatss, iatdec [, ixmod]",
    ],
    id: "envlpx",
    type: "opcode",
  },
  envlpxr: {
    synopsis: [
      "ares envlpxr xamp, irise, idec, ifn, iatss, iatdec [, ixmod] [,irind]",
      "kres envlpxr kamp, irise, idec, ifn, iatss, iatdec [, ixmod] [,irind]",
    ],
    id: "envlpxr",
    type: "opcode",
  },
  ephasor: {
    synopsis: ["aexp,aph ephasor kfreq, kR"],
    id: "ephasor",
    type: "opcode",
  },
  eqfil: {
    synopsis: ["asig eqfil ain, kcf, kbw, kgain[, istor]"],
    id: "eqfil",
    type: "opcode",
  },
  "==": {synopsis: ["(a == b ? v1 : v2)"], id: "equals", type: "opcode"},
  evalstr: {
    synopsis: ["ires evalstr Scode ", "kres evalstr Scode, ktrig "],
    id: "evalstr",
    type: "opcode",
  },
  event: {
    synopsis: [
      'event "scorechar", kinsnum, kdelay, kdur, [, kp4] [, kp5] [, ...]',
      'event "scorechar", "insname", kdelay, kdur, [, kp4] [, kp5] [, ...]',
    ],
    id: "event",
    type: "opcode",
  },
  event_i: {
    synopsis: [
      'event_i "scorechar", iinsnum, idelay, idur, [, ip4] [, ip5] [, ...]',
      'event_i "scorechar", "insname", idelay, idur, [, ip4] [, ip5] [, ...]',
    ],
    id: "event_i",
    type: "opcode",
  },
  exciter: {
    synopsis: ["ares exciter asig, kfreq, kceil, kharmonics, kblend"],
    id: "exciter",
    type: "opcode",
  },
  exitnow: {synopsis: ["exitnow [ivalue]"], id: "exitnow", type: "opcode"},
  exp: {
    synopsis: ["exp(x) (no rate restriction)", "exp(k/i[]) (k- or i-arrays)"],
    id: "exp",
    type: "opcode",
  },
  expcurve: {
    synopsis: ["kout expcurve kindex, ksteepness"],
    id: "expcurve",
    type: "opcode",
  },
  expon: {
    synopsis: ["ares expon ia, idur, ib", "kres expon ia, idur, ib"],
    id: "expon",
    type: "opcode",
  },
  exprand: {
    synopsis: [
      "ares exprand klambda",
      "ires exprand klambda",
      "kres exprand klambda",
    ],
    id: "exprand",
    type: "opcode",
  },
  exprandi: {
    synopsis: [
      "ares exprandi klambda, xamp, xcps",
      "ires exprandi klambda, xamp, xcps",
      "kres exprandi klambda, xamp, xcps",
    ],
    id: "exprandi",
    type: "opcode",
  },
  expseg: {
    synopsis: [
      "ares expseg ia, idur1, ib [, idur2] [, ic] [...]",
      "kres expseg ia, idur1, ib [, idur2] [, ic] [...]",
    ],
    id: "expseg",
    type: "opcode",
  },
  expsega: {
    synopsis: ["ares expsega ia, idur1, ib [, idur2] [, ic] [...]"],
    id: "expsega",
    type: "opcode",
  },
  expsegb: {
    synopsis: [
      "ares expsegb ia, itim1, ib [, itim2] [, ic] [...]",
      "kres expsegb ia, itim1, ib [, itim2] [, ic] [...]",
    ],
    id: "expsegb",
    type: "opcode",
  },
  expsegba: {
    synopsis: ["ares expsegba ia, itim1, ib [, itim2] [, ic] [...]"],
    id: "expsegba",
    type: "opcode",
  },
  expsegr: {
    synopsis: [
      "ares expsegr ia, idur1, ib [, idur2] [, ic] [...], irel, iz",
      "kres expsegr ia, idur1, ib [, idur2] [, ic] [...], irel, iz",
    ],
    id: "expsegr",
    type: "opcode",
  },
  fareylen: {synopsis: ["kfl fareylen kfn"], id: "fareylen", type: "opcode"},
  fareyleni: {
    synopsis: ["ifl fareyleni ifn"],
    id: "fareyleni",
    type: "opcode",
  },
  faustaudio: {
    synopsis: ["ihandle,a1[,a2,...] faustaudio ifac[,ain1,...] "],
    id: "faustaudio",
    type: "opcode",
  },
  faustcompile: {
    synopsis: ["ihandle faustcompile Scode, Sargs[,iasync, istacksize] "],
    id: "faustcompile",
    type: "opcode",
  },
  faustctl: {
    synopsis: ["faustctl idsp,Scontrol,kval "],
    id: "faustctl",
    type: "opcode",
  },
  faustdsp: {
    synopsis: ["ihandle faustdsp ifac "],
    id: "faustdsp",
    type: "opcode",
  },
  faustgen: {
    synopsis: ["ihandle,a1[,a2,...] faustgen SCode[,ain1,...] "],
    id: "faustgen",
    type: "opcode",
  },
  faustplay: {
    synopsis: ["a1[, a2,...] faustplay ihandle[, ain1,...]"],
    id: "faustplay",
    type: "opcode",
  },
  fft: {synopsis: ["kout[] fft kin[]"], id: "fft", type: "opcode"},
  ficlose: {
    synopsis: ["ficlose ihandle", "ficlose Sfilename"],
    id: "ficlose",
    type: "opcode",
  },
  filebit: {
    synopsis: ["ir filebit ifilcod [, iallowraw]"],
    id: "filebit",
    type: "opcode",
  },
  filelen: {
    synopsis: ["ir filelen ifilcod, [iallowraw]"],
    id: "filelen",
    type: "opcode",
  },
  filenchnls: {
    synopsis: ["ir filenchnls ifilcod [, iallowraw]"],
    id: "filenchnls",
    type: "opcode",
  },
  filepeak: {
    synopsis: ["ir filepeak ifilcod [, ichnl]"],
    id: "filepeak",
    type: "opcode",
  },
  filescal: {
    synopsis: [
      "asig[,asig2] filescal ktimescal, kamp, kpitch, Sfile, klock [,ifftsize, idecim, ithresh] ",
    ],
    id: "filescal",
    type: "opcode",
  },
  filesr: {
    synopsis: ["ir filesr ifilcod [, iallowraw]"],
    id: "filesr",
    type: "opcode",
  },
  filevalid: {
    synopsis: ["ir filevalid ifilcod"],
    id: "filevalid",
    type: "opcode",
  },
  fillarray: {
    synopsis: [
      "karray[] fillarray ival1, ival2,.....ivaln",
      "karray fillarray ival1, ival2,.....ivaln",
      "karray fillarray kval1, kval2,.....kvaln",
    ],
    id: "fillarray",
    type: "opcode",
  },
  filter2: {
    synopsis: [
      "ares filter2 asig, iM, iN, ib0, ib1, ..., ibM, ia1, ia2, ..., iaN",
      "kres filter2 ksig, iM, iN, ib0, ib1, ..., ibM, ia1, ia2, ..., iaN",
    ],
    id: "filter2",
    type: "opcode",
  },
  fin: {
    synopsis: [
      "fin ifilename, iskipframes, iformat, ain1 [, ain2] [, ain3] [,...]",
      "fin ifilename, iskipframes, iformat, arr[]",
    ],
    id: "fin",
    type: "opcode",
  },
  fini: {
    synopsis: [
      "fini ifilename, iskipframes, iformat, in1 [, in2] [, in3] [, ...]",
    ],
    id: "fini",
    type: "opcode",
  },
  fink: {
    synopsis: [
      "fink ifilename, iskipframes, iformat, kin1 [, kin2] [, kin3] [,...]",
    ],
    id: "fink",
    type: "opcode",
  },
  fiopen: {
    synopsis: ["ihandle fiopen ifilename, imode"],
    id: "fiopen",
    type: "opcode",
  },
  flanger: {
    synopsis: ["ares flanger asig, adel, kfeedback [, imaxd]"],
    id: "flanger",
    type: "opcode",
  },
  flashtxt: {
    synopsis: ["flashtxt iwhich, String"],
    id: "flashtxt",
    type: "opcode",
  },
  FLbox: {
    synopsis: [
      'ihandle FLbox "label", itype, ifont, isize, iwidth, iheight, ix, iy [, image]',
      "ihandle FLbox istr, itype, ifont, isize, iwidth, iheight, ix, iy [, image]",
    ],
    id: "FLbox",
    type: "opcode",
  },
  FLbutBank: {
    synopsis: [
      "kout, ihandle FLbutBank itype, inumx, inumy, iwidth, iheight, ix, iy, iopcode [, kp1] [, kp2] [, kp3] [, kp4] [, kp5] [....] [, kpN]",
    ],
    id: "FLbutBank",
    type: "opcode",
  },
  FLbutton: {
    synopsis: [
      'kout, ihandle FLbutton "label", ion, ioff, itype, iwidth, iheight, ix, iy, iopcode [, kp1] [, kp2] [, kp3] [, kp4] [, kp5] [....] [, kpN]',
    ],
    id: "FLbutton",
    type: "opcode",
  },
  FLcloseButton: {
    synopsis: ['ihandle FLcloseButton "label", iwidth, iheight, ix, iy'],
    id: "FLcloseButton",
    type: "opcode",
  },
  FLcolor: {
    synopsis: ["FLcolor ired, igreen, iblue [, ired2, igreen2, iblue2]"],
    id: "FLcolor",
    type: "opcode",
  },
  FLcolor2: {
    synopsis: ["FLcolor2 ired, igreen, iblue"],
    id: "FLcolor2",
    type: "opcode",
  },
  FLcount: {
    synopsis: [
      'kout, ihandle FLcount "label", imin, imax, istep1, istep2, itype, iwidth, iheight, ix, iy, iopcode [, kp1] [, kp2] [, kp3] [...] [, kpN]',
    ],
    id: "FLcount",
    type: "opcode",
  },
  FLexecButton: {
    synopsis: ['ihandle FLexecButton "command", iwidth, iheight, ix, iy'],
    id: "FLexecButton",
    type: "opcode",
  },
  FLgetsnap: {
    synopsis: ["inumsnap FLgetsnap index [, igroup]"],
    id: "FLgetsnap",
    type: "opcode",
  },
  FLgroup: {
    synopsis: [
      'FLgroup "label", iwidth, iheight, ix, iy [, iborder] [, image]',
    ],
    id: "FLgroup",
    type: "opcode",
  },
  FLgroup_end: {synopsis: [], id: "FLgroup_end", type: "opcode"},
  FLgroupEnd: {synopsis: ["FLgroupEnd"], id: "FLgroupEnd", type: "opcode"},
  FLhide: {synopsis: ["FLhide ihandle"], id: "FLhide", type: "opcode"},
  FLhvsBox: {
    synopsis: [
      "ihandle FLhvsBox inumlinesX, inumlinesY, iwidth, iheight, ix, iy",
    ],
    id: "FLhvsBox",
    type: "opcode",
  },
  FLhvsBoxSetValue: {
    synopsis: ["FLhvsBox kx, ky, ihandle"],
    id: "FLhvsBoxSetValue",
    type: "opcode",
  },
  FLjoy: {
    synopsis: [
      'koutx, kouty, ihandlex, ihandley FLjoy "label", iminx, imaxx, iminy, imaxy, iexpx, iexpy, idispx, idispy, iwidth, iheight, ix, iy',
    ],
    id: "FLjoy",
    type: "opcode",
  },
  FLkeyIn: {
    synopsis: ["kascii FLkeyIn [ifn]"],
    id: "FLkeyIn",
    type: "opcode",
  },
  FLknob: {
    synopsis: [
      'kout, ihandle FLknob "label", imin, imax, iexp, itype, idisp, iwidth, ix, iy [, icursorsize]',
    ],
    id: "FLknob",
    type: "opcode",
  },
  FLlabel: {
    synopsis: ["FLlabel isize, ifont, ialign, ired, igreen, iblue"],
    id: "FLlabel",
    type: "opcode",
  },
  FLloadsnap: {
    synopsis: ['FLloadsnap "filename" [, igroup]'],
    id: "FLloadsnap",
    type: "opcode",
  },
  FLmouse: {
    synopsis: ["kx, ky, kb1, kb2, kb3 FLmouse [imode]"],
    id: "FLmouse",
    type: "opcode",
  },
  flooper: {
    synopsis: ["asig1[, asig2] flooper kamp, kpitch, istart, idur, ifad, ifn"],
    id: "flooper",
    type: "opcode",
  },
  flooper2: {
    synopsis: [
      "asig1[,asig2] flooper2 kamp, kpitch, kloopstart, kloopend, kcrossfade, ifn [, istart, imode, ifenv, iskip]",
    ],
    id: "flooper2",
    type: "opcode",
  },
  floor: {
    synopsis: [
      "floor(x) (init-, control-, or audio-rate arg allowed)",
      "floor(k/i[]) (k- or i-arrays )",
    ],
    id: "floor",
    type: "opcode",
  },
  FLpack: {
    synopsis: ["FLpack iwidth, iheight, ix, iy, itype, ispace, iborder"],
    id: "FLpack",
    type: "opcode",
  },
  FLpack_end: {synopsis: [], id: "FLpack_end", type: "opcode"},
  FLpackEnd: {synopsis: ["FLpackEnd"], id: "FLpackEnd", type: "opcode"},
  FLpanel: {
    synopsis: [
      'FLpanel "label", iwidth, iheight [, ix] [, iy] [, iborder] [, ikbdcapture] [, iclose]',
    ],
    id: "FLpanel",
    type: "opcode",
  },
  FLpanel_end: {synopsis: [], id: "FLpanel_end", type: "opcode"},
  FLpanelEnd: {synopsis: ["FLpanelEnd"], id: "FLpanelEnd", type: "opcode"},
  FLprintk: {
    synopsis: ["FLprintk itime, kval, idisp"],
    id: "FLprintk",
    type: "opcode",
  },
  FLprintk2: {
    synopsis: ["FLprintk2 kval, idisp"],
    id: "FLprintk2",
    type: "opcode",
  },
  FLroller: {
    synopsis: [
      'kout, ihandle FLroller "label", imin, imax, istep, iexp, itype, idisp, iwidth, iheight, ix, iy',
    ],
    id: "FLroller",
    type: "opcode",
  },
  FLrun: {synopsis: ["FLrun"], id: "FLrun", type: "opcode"},
  FLsavesnap: {
    synopsis: ['FLsavesnap "filename" [, igroup]'],
    id: "FLsavesnap",
    type: "opcode",
  },
  FLscroll: {
    synopsis: ["FLscroll iwidth, iheight [, ix] [, iy]"],
    id: "FLscroll",
    type: "opcode",
  },
  FLscrollEnd: {synopsis: ["FLscrollEnd"], id: "FLscrollEnd", type: "opcode"},
  FLsetAlign: {
    synopsis: ["FLsetAlign ialign, ihandle"],
    id: "FLsetAlign",
    type: "opcode",
  },
  FLsetBox: {
    synopsis: ["FLsetBox itype, ihandle"],
    id: "FLsetBox",
    type: "opcode",
  },
  FLsetColor: {
    synopsis: ["FLsetColor ired, igreen, iblue, ihandle"],
    id: "FLsetColor",
    type: "opcode",
  },
  FLsetColor2: {
    synopsis: ["FLsetColor2 ired, igreen, iblue, ihandle"],
    id: "FLsetColor2",
    type: "opcode",
  },
  FLsetFont: {
    synopsis: ["FLsetFont ifont, ihandle"],
    id: "FLsetFont",
    type: "opcode",
  },
  FLsetPosition: {
    synopsis: ["FLsetPosition ix, iy, ihandle"],
    id: "FLsetPosition",
    type: "opcode",
  },
  FLsetSize: {
    synopsis: ["FLsetSize iwidth, iheight, ihandle"],
    id: "FLsetSize",
    type: "opcode",
  },
  FLsetsnap: {
    synopsis: ["inumsnap, inumval FLsetsnap index [, ifn, igroup]"],
    id: "FLsetsnap",
    type: "opcode",
  },
  FLsetSnapGroup: {
    synopsis: ["FLsetSnapGroup igroup"],
    id: "FLsetSnapGroup",
    type: "opcode",
  },
  FLsetText: {
    synopsis: ['FLsetText "itext", ihandle', "FLsetText istr, ihandle"],
    id: "FLsetText",
    type: "opcode",
  },
  FLsetTextColor: {
    synopsis: ["FLsetTextColor ired, iblue, igreen, ihandle"],
    id: "FLsetTextColor",
    type: "opcode",
  },
  FLsetTextSize: {
    synopsis: ["FLsetTextSize isize, ihandle"],
    id: "FLsetTextSize",
    type: "opcode",
  },
  FLsetTextType: {
    synopsis: ["FLsetTextType itype, ihandle"],
    id: "FLsetTextType",
    type: "opcode",
  },
  FLsetVal: {
    synopsis: ["FLsetVal ktrig, kvalue, ihandle"],
    id: "FLsetVal",
    type: "opcode",
  },
  FLsetVal_i: {
    synopsis: ["FLsetVal_i ivalue, ihandle"],
    id: "FLsetVal_i",
    type: "opcode",
  },
  FLshow: {synopsis: ["FLshow ihandle"], id: "FLshow", type: "opcode"},
  FLslidBnk: {
    synopsis: [
      'FLslidBnk "names", inumsliders [, ioutable] [, iwidth] [, iheight] [, ix] [, iy] [, itypetable] [, iexptable] [, istart_index] [, iminmaxtable]',
    ],
    id: "FLslidBnk",
    type: "opcode",
  },
  FLslidBnk2: {
    synopsis: [
      'FLslidBnk2 "names", inumsliders, ioutable, iconfigtable [,iwidth, iheight, ix, iy, istart_index] ',
      "FLslidBnk2 istring, inumsliders, ioutable, iconfigtable [,iwidth, iheight, ix, iy, istart_index] ",
    ],
    id: "FLslidBnk2",
    type: "opcode",
  },
  FLslidBnk2Set: {
    synopsis: [
      "FLslidBnk2Set ihandle, ifn [, istartIndex, istartSlid, inumSlid]",
    ],
    id: "FLslidBnk2Set",
    type: "opcode",
  },
  FLslidBnk2Setk: {
    synopsis: [
      "FLslidBnk2Setk ktrig, ihandle, ifn [, istartIndex, istartSlid, inumSlid]",
    ],
    id: "FLslidBnk2Setk",
    type: "opcode",
  },
  FLslidBnkGetHandle: {
    synopsis: ["ihandle FLslidBnkGetHandle"],
    id: "FLslidBnkGetHandle",
    type: "opcode",
  },
  FLslidBnkSet: {
    synopsis: [
      "FLslidBnkSet ihandle, ifn [, istartIndex, istartSlid, inumSlid]",
    ],
    id: "FLslidBnkSet",
    type: "opcode",
  },
  FLslidBnkSetk: {
    synopsis: [
      "FLslidBnkSetk ktrig, ihandle, ifn [, istartIndex, istartSlid, inumSlid]",
    ],
    id: "FLslidBnkSetk",
    type: "opcode",
  },
  FLslider: {
    synopsis: [
      'kout, ihandle FLslider "label", imin, imax, iexp, itype, idisp, iwidth, iheight, ix, iy',
    ],
    id: "FLslider",
    type: "opcode",
  },
  FLtabs: {
    synopsis: ["FLtabs iwidth, iheight, ix, iy"],
    id: "FLtabs",
    type: "opcode",
  },
  "FLtabs)end": {synopsis: [], id: "FLtabs_end", type: "opcode"},
  FLtabsEnd: {synopsis: ["FLtabsEnd"], id: "FLtabsEnd", type: "opcode"},
  FLtext: {
    synopsis: [
      'kout, ihandle FLtext "label", imin, imax, istep, itype, iwidth, iheight, ix, iy',
    ],
    id: "FLtext",
    type: "opcode",
  },
  fluidAllOut: {
    synopsis: ["aleft, aright fluidAllOut"],
    id: "fluidAllOut",
    type: "opcode",
  },
  fluidCCi: {
    synopsis: [
      "fluidCCi iEngineNumber, iChannelNumber, iControllerNumber, iValue",
    ],
    id: "fluidCCi",
    type: "opcode",
  },
  fluidCCk: {
    synopsis: [
      "fluidCCk iEngineNumber, iChannelNumber, iControllerNumber, kValue",
    ],
    id: "fluidCCk",
    type: "opcode",
  },
  fluidControl: {
    synopsis: [
      "fluidControl ienginenum, kstatus, kchannel, kdata1, kdata2 [,imsgs]",
    ],
    id: "fluidControl",
    type: "opcode",
  },
  fluidEngine: {
    synopsis: [
      "ienginenum fluidEngine [iChorusEnabled] [, iRevervEnabled] [, iNumChannels] [, iPolyphony] ",
    ],
    id: "fluidEngine",
    type: "opcode",
  },
  fluidInfo: {
    synopsis: ["SPrograms[] fluidInfo ienginenum"],
    id: "fluidInfo",
    type: "opcode",
  },
  fluidLoad: {
    synopsis: ["isfnum fluidLoad soundfont, ienginenum[, ilistpresets]"],
    id: "fluidLoad",
    type: "opcode",
  },
  fluidNote: {
    synopsis: ["fluidNote ienginenum, ichannelnum, imidikey, imidivel"],
    id: "fluidNote",
    type: "opcode",
  },
  fluidOut: {
    synopsis: ["aleft, aright fluidOut ienginenum"],
    id: "fluidOut",
    type: "opcode",
  },
  fluidProgramSelect: {
    synopsis: [
      "fluidProgramSelect ienginenum, ichannelnum, isfnum, ibanknum, ipresetnum",
    ],
    id: "fluidProgramSelect",
    type: "opcode",
  },
  fluidSetInterpMethod: {
    synopsis: ["fluidSetInterpMethod ienginenum, ichannelnum, iInterpMethod"],
    id: "fluidSetInterpMethod",
    type: "opcode",
  },
  FLupdate: {synopsis: ["FLupdate"], id: "FLupdate", type: "opcode"},
  FLvalue: {
    synopsis: ['ihandle FLvalue "label", iwidth, iheight, ix, iy'],
    id: "FLvalue",
    type: "opcode",
  },
  FLvkeybd: {
    synopsis: ['FLvkeybd "keyboard.map", iwidth, iheight, ix, iy'],
    id: "FLvkeybd",
    type: "opcode",
  },
  FLvslidBnk: {
    synopsis: [
      'FLvslidBnk "names", inumsliders [, ioutable] [, iwidth] [, iheight] [, ix] [, iy] [, itypetable] [, iexptable] [, istart_index] [, iminmaxtable]',
    ],
    id: "FLvslidBnk",
    type: "opcode",
  },
  FLvslidBnk2: {
    synopsis: [
      'FLvslidBnk2 "names", inumsliders, ioutable, iconfigtable [,iwidth, iheight, ix, iy, istart_index]',
    ],
    id: "FLvslidBnk2",
    type: "opcode",
  },
  FLxyin: {
    synopsis: [
      "koutx, kouty, kinside FLxyin ioutx_min, ioutx_max, iouty_min, iouty_max, iwindx_min, iwindx_max, iwindy_min, iwindy_max [, iexpx, iexpy, ioutx, iouty]",
    ],
    id: "FLxyin",
    type: "opcode",
  },
  fmanal: {
    synopsis: ["am, af fmanal are, aim"],
    id: "fmanal",
    type: "opcode",
  },
  fmax: {
    synopsis: [
      "ires[] fmax iarg1[], iarg2[] ",
      "kres[] fmax karg1[], karg2[]",
      "ires[] fmax iarg1[], iarg2 ",
      "kres[] fmax karg[], karg2 ",
    ],
    id: "fmax",
    type: "opcode",
  },
  fmb3: {
    synopsis: [
      "ares fmb3 kamp, kfreq, kc1, kc2, kvdepth, kvrate[, ifn1, ifn2, ifn3, ifn4, ivfn]",
    ],
    id: "fmb3",
    type: "opcode",
  },
  fmbell: {
    synopsis: [
      "ares fmbell kamp, kfreq, kc1, kc2, kvdepth, kvrate[, ifn1, ifn2, ifn3, ifn4, ivfn, isus]",
    ],
    id: "fmbell",
    type: "opcode",
  },
  fmin: {
    synopsis: [
      "ires[] fmin iarg1[], iarg2[] ",
      "kres[] fmin karg1[], karg2[]",
      "ires[] fmin iarg1[], iarg2 ",
      "kres[] fmin karg[], karg2 ",
    ],
    id: "fmin",
    type: "opcode",
  },
  fmmetal: {
    synopsis: [
      "ares fmmetal kamp, kfreq, kc1, kc2, kvdepth, kvrate, ifn1, ifn2, ifn3, ifn4, ivfn",
    ],
    id: "fmmetal",
    type: "opcode",
  },
  fmod: {
    synopsis: [
      "ires[] fmod iarg1[], iarg2[] ",
      "kres[] fmod karg1[], karg2[]",
      "ires[] fmod iarg1[], iarg2 ",
      "kres[] fmod karg[], karg2 ",
    ],
    id: "fmod",
    type: "opcode",
  },
  fmpercfl: {
    synopsis: [
      "ares fmpercfl kamp, kfreq, kc1, kc2, kvdepth, kvrate[, ifn1, ifn2, ifn3, ifn4, ivfn]",
    ],
    id: "fmpercfl",
    type: "opcode",
  },
  fmrhode: {
    synopsis: [
      "ares fmrhode kamp, kfreq, kc1, kc2, kvdepth, kvrate, ifn1, ifn2, ifn3, ifn4, ivfn",
    ],
    id: "fmrhode",
    type: "opcode",
  },
  fmvoice: {
    synopsis: [
      "ares fmvoice kamp, kfreq, kvowel, ktilt, kvibamt, kvibrate[, ifn1, ifn2, ifn3, ifn4, ivibfn]",
    ],
    id: "fmvoice",
    type: "opcode",
  },
  fmwurlie: {
    synopsis: [
      "ares fmwurlie kamp, kfreq, kc1, kc2, kvdepth, kvrate, ifn1, ifn2, ifn3, ifn4, ivfn",
    ],
    id: "fmwurlie",
    type: "opcode",
  },
  fof: {
    synopsis: [
      "ares fof xamp, xfund, xform, koct, kband, kris, kdur, kdec, iolaps, ifna, ifnb, itotdur [, iphs] [, ifmode] [, iskip]",
    ],
    id: "fof",
    type: "opcode",
  },
  fof2: {
    synopsis: [
      "ares fof2 xamp, xfund, xform, koct, kband, kris, kdur, kdec, iolaps, ifna, ifnb, itotdur, kphs, kgliss [, iskip]",
    ],
    id: "fof2",
    type: "opcode",
  },
  fofilter: {
    synopsis: ["asig fofilter ain, xcf, xris, xdec[, istor]"],
    id: "fofilter",
    type: "opcode",
  },
  fog: {
    synopsis: [
      "ares fog xamp, xdens, xtrans, aspd, koct, kband, kris, kdur, kdec, iolaps, ifna, ifnb, itotdur [, iphs] [, itmode] [, iskip]",
    ],
    id: "fog",
    type: "opcode",
  },
  fold: {synopsis: ["ares fold asig, kincr"], id: "fold", type: "opcode"},
  follow: {
    synopsis: ["ares follow asig, idt"],
    id: "follow",
    type: "opcode",
  },
  follow2: {
    synopsis: ["ares follow2 asig, katt, krel"],
    id: "follow2",
    type: "opcode",
  },
  foscil: {
    synopsis: ["ares foscil xamp, kcps, xcar, xmod, kndx, ifn [, iphs]"],
    id: "foscil",
    type: "opcode",
  },
  foscili: {
    synopsis: ["ares foscili xamp, kcps, xcar, xmod, kndx, ifn [, iphs]"],
    id: "foscili",
    type: "opcode",
  },
  fout: {
    synopsis: [
      "fout ifilename, iformat, aout1 [, aout2, aout3,...,aoutN]",
      "fout ifilename, iformat, array[]",
    ],
    id: "fout",
    type: "opcode",
  },
  fouti: {
    synopsis: [
      "fouti ihandle, iformat, iflag, iout1 [, iout2, iout3,....,ioutN]",
    ],
    id: "fouti",
    type: "opcode",
  },
  foutir: {
    synopsis: [
      "foutir ihandle, iformat, iflag, iout1 [, iout2, iout3,....,ioutN]",
    ],
    id: "foutir",
    type: "opcode",
  },
  foutk: {
    synopsis: ["foutk ifilename, iformat, kout1 [, kout2, kout3,....,koutN]"],
    id: "foutk",
    type: "opcode",
  },
  fprintks: {
    synopsis: ['fprintks "filename", "string", [, kval1] [, kval2] [...]'],
    id: "fprintks",
    type: "opcode",
  },
  fprints: {
    synopsis: ['fprints "filename", "string" [, ival1] [, ival2] [...]'],
    id: "fprints",
    type: "opcode",
  },
  frac: {
    synopsis: [
      "frac(x) (init-rate or control-rate args; also works at audio rate in Csound5)",
      "frac(k/i[]) (k- or i-arrays )",
    ],
    id: "frac",
    type: "opcode",
  },
  fractalnoise: {
    synopsis: ["ares fractalnoise kamp, kbeta"],
    id: "fractalnoise",
    type: "opcode",
  },
  framebuffer: {
    synopsis: ["kout[] framebuffer ain, isize", "aout framebuffer kin, isize"],
    id: "framebuffer",
    type: "opcode",
  },
  freeverb: {
    synopsis: [
      "aoutL, aoutR freeverb ainL, ainR, kRoomSize, kHFDamp[, iSRate[, iSkip]] ",
    ],
    id: "freeverb",
    type: "opcode",
  },
  ftaudio: {
    synopsis: [
      'ians ftaudio ifn, "filename", iformat[, ibeg, iend]',
      'kans ftaudio ktrig, kfn, "filename", kformat [, isync, kbeg, kend]',
    ],
    id: "ftaudio",
    type: "opcode",
  },
  ftchnls: {
    synopsis: ["ftchnls(x) (init-rate args only)"],
    id: "ftchnls",
    type: "opcode",
  },
  ftconv: {
    synopsis: [
      "a1[, a2[, a3[, ... a8]]] ftconv ain, ift, iplen[, iskipsamples [, iirlen[, iskipinit]]]",
    ],
    id: "ftconv",
    type: "opcode",
  },
  ftcps: {
    synopsis: ["ftcps(x) (init-rate args only)"],
    id: "ftcps",
    type: "opcode",
  },
  ftexists: {
    synopsis: ["iexists ftexists ifn ", "kexists ftexists kfn / ifn"],
    id: "ftexists",
    type: "opcode",
  },
  ftfree: {synopsis: ["ftfree ifno, iwhen"], id: "ftfree", type: "opcode"},
  ftgen: {
    synopsis: [
      "gir ftgen ifn, itime, isize, igen, iarga [, iargb ] [...]",
      "gir ftgen ifn, itime, isize, igen, iarray",
    ],
    id: "ftgen",
    type: "opcode",
  },
  ftgenonce: {
    synopsis: ["ifno ftgenonce ip1, ip2dummy, isize, igen, iarga, iargb, ..."],
    id: "ftgenonce",
    type: "opcode",
  },
  ftgentmp: {
    synopsis: ["ifno ftgentmp ip1, ip2dummy, isize, igen, iarga, iargb, ..."],
    id: "ftgentmp",
    type: "opcode",
  },
  ftlen: {
    synopsis: ["ftlen(x) (init-rate args only)"],
    id: "ftlen",
    type: "opcode",
  },
  ftload: {
    synopsis: ["ftload Sfilename, iflag, ifn1 [, ifn2] [...]"],
    id: "ftload",
    type: "opcode",
  },
  ftloadk: {
    synopsis: ["ftloadk Sfilename, ktrig, iflag, ifn1 [, ifn2] [...]"],
    id: "ftloadk",
    type: "opcode",
  },
  ftlptim: {
    synopsis: ["ftlptim(x) (init-rate args only)"],
    id: "ftlptim",
    type: "opcode",
  },
  ftmorf: {
    synopsis: ["ftmorf kftndx, iftfn, iresfn"],
    id: "ftmorf",
    type: "opcode",
  },
  ftom: {
    synopsis: [
      "imidi ftom ifreq [,irnd]",
      "kmidi ftom kfreq [,irnd]",
      "imidis[] ftom ifreqs[] [,irnd]",
      "kmidis[] ftom kfreqs[] [,irnd]",
    ],
    id: "ftom",
    type: "opcode",
  },
  ftprint: {
    synopsis: ["ftprint ifn [, ktrig, kstart, kend, kstep, inumcols ]"],
    id: "ftprint",
    type: "opcode",
  },
  ftsamplebank: {
    synopsis: [
      "iNumberOfFile ftsamplebank SDirectory, iFirstTableNumber, iSkipTime, iFormat, iChannel,",
      "kNumberOfFile ftsamplebank SDirectory, kFirstTableNumber, kTrigger, kSkipTime, kFormat, kChannel,",
    ],
    id: "ftsamplebank",
    type: "opcode",
  },
  ftsave: {
    synopsis: ['ftsave "filename", iflag, ifn1 [, ifn2] [...]'],
    id: "ftsave",
    type: "opcode",
  },
  ftsavek: {
    synopsis: ['ftsavek "filename", ktrig, iflag, ifn1 [, ifn2] [...]'],
    id: "ftsavek",
    type: "opcode",
  },
  ftset: {
    synopsis: [
      "ftset ktablenum, kvalue [, kstart=0, kend=0, kstep=1 ]",
      "ftset itablenum, ivalue [, istart=0, iend=0, istep=1 ]",
    ],
    id: "ftset",
    type: "opcode",
  },
  ftslice: {
    synopsis: [
      "ftslice ifnsource, ifndest [, kstart, kend, kstep ]",
      "ftslice kfnsource, kfndest [, kstart, kend, kstep ]",
    ],
    id: "ftslice",
    type: "opcode",
  },
  ftslicei: {
    synopsis: ["ftslicei ifnsource, ifndest [, istart, iend, istep ]"],
    id: "ftslicei",
    type: "opcode",
  },
  ftsr: {
    synopsis: ["ftsr(x) (init-rate args only)"],
    id: "ftsr",
    type: "opcode",
  },
  gain: {
    synopsis: ["ares gain asig, krms [, ihp] [, iskip]"],
    id: "gain",
    type: "opcode",
  },
  gainslider: {
    synopsis: ["kout gainslider kindex"],
    id: "gainslider",
    type: "opcode",
  },
  gauss: {
    synopsis: [
      "ares gauss krange",
      "ires gauss irange",
      "kres gauss krange",
      "ares gauss kmean, ksdev",
      "ires gauss imean, isdev",
      "kres gauss kmean, ksdev",
    ],
    id: "gauss",
    type: "opcode",
  },
  gaussi: {
    synopsis: [
      "ares gaussi krange, xamp, xcps",
      "ires gaussi krange, xamp, xcps",
      "kres gaussi krange, xamp, xcps",
    ],
    id: "gaussi",
    type: "opcode",
  },
  gausstrig: {
    synopsis: [
      "ares gausstrig kamp, kcps, kdev [, imode] [, ifrst1]",
      "kres gausstrig kamp, kcps, kdev [, imode] [, ifrst1]",
    ],
    id: "gausstrig",
    type: "opcode",
  },
  gbuzz: {
    synopsis: ["ares gbuzz xamp, xcps, knh, klh, kmul, ifn [, iphs]"],
    id: "gbuzz",
    type: "opcode",
  },
  genarray: {
    synopsis: [
      "karray genarray kstart, kens[, inc]",
      "iarray genarray istart, iens[, inc]",
    ],
    id: "genarray",
    type: "opcode",
  },
  genarray_i: {
    synopsis: ["karray genarray_i istart, iend [,inc]"],
    id: "genarray_i",
    type: "opcode",
  },
  gendy: {
    synopsis: [
      "ares gendy kamp, kampdist, kdurdist, kadpar, kddpar, kminfreq, kmaxfreq, kampscl, kdurscl [, initcps] [, knum]",
      "kres gendy kamp, kampdist, kdurdist, kadpar, kddpar, kminfreq, kmaxfreq, kampscl, kdurscl [, initcps] [, knum]",
    ],
    id: "gendy",
    type: "opcode",
  },
  gendyc: {
    synopsis: [
      "ares gendyc kamp, kampdist, kdurdist, kadpar, kddpar, kminfreq, kmaxfreq, kampscl, kdurscl [, initcps] [, knum]",
      "kres gendyc kamp, kampdist, kdurdist, kadpar, kddpar, kminfreq, kmaxfreq, kampscl, kdurscl [, initcps] [, knum]",
    ],
    id: "gendyc",
    type: "opcode",
  },
  gendyx: {
    synopsis: [
      "ares gendyx kamp, kampdist, kdurdist, kadpar, kddpar, kminfreq, kmaxfreq, kampscl, kdurscl, kcurveup, kcurvedown [, initcps] [, knum]",
      "kres gendyx kamp, kampdist, kdurdist, kadpar, kddpar, kminfreq, kmaxfreq, kampscl, kdurscl, kcurveup, kcurvedown [, initcps] [, knum]",
    ],
    id: "gendyx",
    type: "opcode",
  },
  getcfg: {synopsis: ["Svalue getcfg iopt"], id: "getcfg", type: "opcode"},
  getcol: {
    synopsis: ["i/kout[] getcoli/kin[],i/kcol"],
    id: "getcol",
    type: "opcode",
  },
  getftargs: {
    synopsis: ["Sdst getftargs iftno, ktrig"],
    id: "getftargs",
    type: "opcode",
  },
  getrow: {
    synopsis: ["i/kout[] getrowi/kin[],i/krow"],
    id: "getrow",
    type: "opcode",
  },
  getrowlin: {
    synopsis: [
      "kOut[] getrowlin kMtx[], krow [, kstart, kend, kstep ]",
      "kOut[] getrowlin krow, ifn, inumcols [, iskip, start, iend, istep ]",
    ],
    id: "getrowlin",
    type: "opcode",
  },
  getseed: {
    synopsis: ["ians getseed", "kans getseed"],
    id: "getseed",
    type: "opcode",
  },
  gogobel: {
    synopsis: ["ares gogobel kamp, kfreq, ihrd, ipos, imp, kvibf, kvamp, ivfn"],
    id: "gogobel",
    type: "opcode",
  },
  goto: {synopsis: ["goto label"], id: "goto", type: "opcode"},
  grain: {
    synopsis: [
      "ares grain xamp, xpitch, xdens, kampoff, kpitchoff, kgdur, igfn, iwfn, imgdur [, igrnd]",
    ],
    id: "grain",
    type: "opcode",
  },
  grain2: {
    synopsis: [
      "ares grain2 kcps, kfmd, kgdur, iovrlp, kfn, iwfn [, irpow] [, iseed] [, imode]",
    ],
    id: "grain2",
    type: "opcode",
  },
  grain3: {
    synopsis: [
      "ares grain3 kcps, kphs, kfmd, kpmd, kgdur, kdens, imaxovr, kfn, iwfn, kfrpow, kprpow [, iseed] [, imode]",
    ],
    id: "grain3",
    type: "opcode",
  },
  granule: {
    synopsis: [
      "ares granule xamp, ivoice, iratio, imode, ithd, ifn, ipshift, igskip, igskip_os, ilength, kgap, igap_os, kgsize, igsize_os, iatt, idec [, iseed] [, ipitch1] [, ipitch2] [, ipitch3] [, ipitch4] [, ifnenv]",
    ],
    id: "granule",
    type: "opcode",
  },
  ">=": {
    synopsis: ["(a >= b ? v1 : v2)"],
    id: "greaterequal",
    type: "opcode",
  },
  ">": {
    synopsis: ["(a > b ? v1 : v2)"],
    id: "greaterthan",
    type: "opcode",
  },
  gtf: {
    synopsis: ["aout gtf ain, kfreq, idecay[, iorder, iphase]"],
    id: "gtf",
    type: "opcode",
  },
  guiro: {
    synopsis: [
      "ares guiro kamp, idettack [, inum] [, idamp] [, imaxshake] [, ifreq] [, ifreq1]",
    ],
    id: "guiro",
    type: "opcode",
  },
  harmon: {
    synopsis: [
      "ares harmon asig, kestfrq, kmaxvar, kgenfreq1, kgenfreq2, imode, iminfrq, iprd",
    ],
    id: "harmon",
    type: "opcode",
  },
  harmon2: {
    synopsis: [
      "ares harmon2 asig, koct, kfrq1, kfrq2, icpsmode, ilowest[, ipolarity]",
      "ares harmon3 asig, koct, kfrq1, kfrq2, kfrq3, icpsmode, ilowest[, ipolarity]",
      "ares harmon4 asig, koct, kfrq1, kfrq2, kfrq3, kfrq4, icpsmode, ilowest[, ipolarity]",
    ],
    id: "harmon2",
    type: "opcode",
  },
  hdf5read: {
    synopsis: [
      "xout1[, xout2, xout3, ..., xoutN] hdf5read ifilename, ivariablename1[, ivariablename2, ivariablename3, ..., ivariablenameN]",
    ],
    id: "hdf5read",
    type: "opcode",
  },
  hdf5write: {
    synopsis: ["hdf5write ifilename, xout1[, xout2, xout3, ..., xoutN]"],
    id: "hdf5write",
    type: "opcode",
  },
  hilbert: {
    synopsis: ["ar1, ar2 hilbert asig"],
    id: "hilbert",
    type: "opcode",
  },
  hilbert2: {
    synopsis: ["ar1, ar2 hilbert2 asig, ifftsize, ihopsize"],
    id: "hilbert2",
    type: "opcode",
  },
  hrtfearly: {
    synopsis: [
      "aleft, aright, irt60low, irt60high, imfp hrtfearly asrc, ksrcx, ksrcy, ksrcz, klstnrx, klstnry, klstnrz, ifilel, ifiler, idefroom [,ifade, isr, iorder, ithreed, kheadrot, iroomx, iroomy, iroomz, iwallhigh, iwalllow, iwallgain1, iwallgain2, iwallgain3, ifloorhigh, ifloorlow, ifloorgain1, ifloorgain2, ifloorgain3, iceilinghigh, iceilinglow, iceilinggain1, iceilinggain2, iceilinggain3]",
    ],
    id: "hrtfearly",
    type: "opcode",
  },
  hrtfer: {
    synopsis: ["aleft, aright hrtfer asig, kaz, kelev, HRTFcompact"],
    id: "hrtfer",
    type: "opcode",
  },
  hrtfmove: {
    synopsis: [
      "aleft, aright hrtfmove asrc, kAz, kElev, ifilel, ifiler [, imode, ifade, isr]",
    ],
    id: "hrtfmove",
    type: "opcode",
  },
  hrtfmove2: {
    synopsis: [
      "aleft, aright hrtfmove2 asrc, kAz, kElev, ifilel, ifiler [,ioverlap, iradius, isr]",
    ],
    id: "hrtfmove2",
    type: "opcode",
  },
  hrtfreverb: {
    synopsis: [
      "aleft, aright, idel hrtfreverb asrc, ilowrt60, ihighrt60, ifilel, ifiler [,isr, imfp, iorder]",
    ],
    id: "hrtfreverb",
    type: "opcode",
  },
  hrtfstat: {
    synopsis: [
      " aleft, aright hrtfstat asrc, iAz, iElev, ifilel, ifiler [,iradius, isr] ",
    ],
    id: "hrtfstat",
    type: "opcode",
  },
  hsboscil: {
    synopsis: [
      "ares hsboscil kamp, ktone, kbrite, ibasfreq, iwfn, ioctfn [, ioctcnt] [, iphs]",
    ],
    id: "hsboscil",
    type: "opcode",
  },
  hvs1: {
    synopsis: [
      "hvs1 kx, inumParms, inumPointsX, iOutTab, iPositionsTab, iSnapTab [, iConfigTab]",
    ],
    id: "hvs1",
    type: "opcode",
  },
  hvs2: {
    synopsis: [
      "hvs2 kx, ky, inumParms, inumPointsX, inumPointsY, iOutTab, iPositionsTab, iSnapTab [, iConfigTab]",
    ],
    id: "hvs2",
    type: "opcode",
  },
  hvs3: {
    synopsis: [
      "hvs3 kx, ky, kz, inumParms, inumPointsX, inumPointsY, inumPointsZ, iOutTab, iPositionsTab, iSnapTab [, iConfigTab]",
    ],
    id: "hvs3",
    type: "opcode",
  },
  hypot: {
    synopsis: [
      "ires[] hypot iarg1[], iarg2[] ",
      "kres[] hypot karg1[], karg2[]",
    ],
    id: "hypot",
    type: "opcode",
  },
  ibetarand: {synopsis: [], id: "ibetarand", type: "opcode"},
  ibexprnd: {synopsis: [], id: "ibexprnd", type: "opcode"},
  icauchy: {synopsis: [], id: "icauchy", type: "opcode"},
  ictrl14: {synopsis: [], id: "ictrl14", type: "opcode"},
  ictrl21: {synopsis: [], id: "ictrl21", type: "opcode"},
  ictrl7: {synopsis: [], id: "ictrl7", type: "opcode"},
  iexprand: {synopsis: [], id: "iexprand", type: "opcode"},
  if: {
    synopsis: [
      "if ia R ib igoto label",
      "if ka R kb kgoto label",
      "if xa R xb goto label",
      "if xa R xb then",
    ],
    id: "if",
    type: "opcode",
  },
  "#ifdef": {
    synopsis: ["#ifdef NAME", "....", "#else ", "....", "#end "],
    id: "ifdef",
    type: "opcode",
  },
  fftinv: {synopsis: ["kout[] fftinv kin[]"], id: "fftinv", type: "opcode"},
  "#ifndef": {
    synopsis: ["#ifndef NAME", "....", "#else ", "....", "#end "],
    id: "ifndef",
    type: "opcode",
  },
  igauss: {synopsis: [], id: "igauss", type: "opcode"},
  igoto: {synopsis: ["igoto label"], id: "igoto", type: "opcode"},
  ihold: {synopsis: ["ihold"], id: "ihold", type: "opcode"},
  ilinrand: {synopsis: [], id: "ilinrand", type: "opcode"},
  imagecreate: {
    synopsis: ["iimagenum imagecreate iwidth, iheight"],
    id: "imagecreate",
    type: "opcode",
  },
  imagefree: {
    synopsis: ["imagefree iimagenum"],
    id: "imagefree",
    type: "opcode",
  },
  imagegetpixel: {
    synopsis: [
      "imagesetpixel iimagenum, ax, ay, ared, agreen, ablue",
      "imagesetpixel iimagenum, kx, ky, kred, kgreen, kblue",
    ],
    id: "imagesetpixel",
    type: "opcode",
  },
  imageload: {
    synopsis: ["iimagenum imageload filename"],
    id: "imageload",
    type: "opcode",
  },
  imagesave: {
    synopsis: ["imagesave iimagenum, filename"],
    id: "imagesave",
    type: "opcode",
  },
  imagesize: {
    synopsis: ["iwidth, iheight imagesize iimagenum"],
    id: "imagesize",
    type: "opcode",
  },
  imidic14: {synopsis: [], id: "imidic14", type: "opcode"},
  imidic21: {synopsis: [], id: "imidic21", type: "opcode"},
  imidic7: {synopsis: [], id: "imidic7", type: "opcode"},
  in: {synopsis: ["ar1 in", "aarray in"], id: "in", type: "opcode"},
  in32: {
    synopsis: [
      "ar1, ar2, ar3, ar4, ar5, ar6, ar7, ar8, ar9, ar10, ar11, ar12, ar13, ar14, ar15, ar16, ar17, ar18, ar19, ar20, ar21, ar22, ar23, ar24, ar25, ar26, ar27, ar28, ar29, ar30, ar31, ar32 in32",
    ],
    id: "in32",
    type: "opcode",
  },
  inch: {
    synopsis: ["ain1[, ...] inch kchan1[,...]"],
    id: "inch",
    type: "opcode",
  },
  "#include": {
    synopsis: ["#include filename", "#includestr filename"],
    id: "include",
    type: "opcode",
  },
  inh: {
    synopsis: ["ar1, ar2, ar3, ar4, ar5, ar6 inh"],
    id: "inh",
    type: "opcode",
  },
  init: {
    synopsis: [
      "ares init iarg",
      "ires init iarg",
      "kres init iarg",
      "ares, ... init iarg, ...",
      "ires, ... init iarg, ...",
      "kres, ... init iarg, ...",
      "tab init isize[, ival]",
    ],
    id: "init",
    type: "opcode",
  },
  initc14: {
    synopsis: ["initc14 ichan, ictlno1, ictlno2, ivalue"],
    id: "initc14",
    type: "opcode",
  },
  initc21: {
    synopsis: ["initc21 ichan, ictlno1, ictlno2, ictlno3, ivalue"],
    id: "initc21",
    type: "opcode",
  },
  initc7: {
    synopsis: ["initc7 ichan, ictlno, ivalue"],
    id: "initc7",
    type: "opcode",
  },
  inleta: {
    synopsis: ["asignal inleta Sname"],
    id: "inleta",
    type: "opcode",
  },
  inletf: {
    synopsis: ["fsignal inletf Sname"],
    id: "inletf",
    type: "opcode",
  },
  inletk: {
    synopsis: ["ksignal inletk Sname"],
    id: "inletk",
    type: "opcode",
  },
  inletkid: {
    synopsis: ["ksignal inletkid Sname, SinstanceID"],
    id: "inletkid",
    type: "opcode",
  },
  inletv: {synopsis: ["array inletv Sname"], id: "inletv", type: "opcode"},
  ino: {
    synopsis: ["ar1, ar2, ar3, ar4, ar5, ar6, ar7, ar8 ino"],
    id: "ino",
    type: "opcode",
  },
  inq: {synopsis: ["ar1, ar2, ar3, a4 inq"], id: "inq", type: "opcode"},
  inrg: {
    synopsis: ["inrg kstart, ain1 [,ain2, ain3, ..., ainN]"],
    id: "inrg",
    type: "opcode",
  },
  ins: {synopsis: ["ar1, ar2 ins"], id: "ins", type: "opcode"},
  insglobal: {
    synopsis: ["insglobal isource, instrnum [,instrnum...] "],
    id: "insglobal",
    type: "opcode",
  },
  insremot: {
    synopsis: ["insremot idestination, isource, instrnum [,instrnum...] "],
    id: "insremot",
    type: "opcode",
  },
  instimek: {synopsis: [], id: "instimek", type: "opcode"},
  instimes: {synopsis: [], id: "instimes", type: "opcode"},
  instr: {synopsis: ["instr i, j, ..."], id: "instr", type: "opcode"},
  int: {
    synopsis: [
      "int(x) (init-rate or control-rate; also works at audio rate in Csound5)",
    ],
    id: "int",
    type: "opcode",
  },
  integ: {
    synopsis: ["ares integ asig [, iskip]", "kres integ ksig [, iskip]"],
    id: "integ",
    type: "opcode",
  },
  interleave: {
    synopsis: ["kout[] interleave kin1[], kin2[]"],
    id: "interleave",
    type: "opcode",
  },
  interp: {
    synopsis: ["ares interp ksig [, iskip] [, imode] [, ivalue]"],
    id: "interp",
    type: "opcode",
  },
  invalue: {
    synopsis: [
      'ivalue invalue "channel name"',
      'kvalue invalue "channel name"',
      'Sname invalue "channel name"',
    ],
    id: "invalue",
    type: "opcode",
  },
  inx: {
    synopsis: [
      "ar1, ar2, ar3, ar4, ar5, ar6, ar7, ar8, ar9, ar10, ar11, ar12, ar13, ar14, ar15, ar16 inx",
    ],
    id: "inx",
    type: "opcode",
  },
  inz: {synopsis: ["inz ksig1"], id: "inz", type: "opcode"},
  ioff: {synopsis: [], id: "ioff", type: "opcode"},
  ion: {synopsis: [], id: "ion", type: "opcode"},
  iondur: {synopsis: [], id: "iondur", type: "opcode"},
  iondur2: {synopsis: [], id: "iondur2", type: "opcode"},
  ioutat: {synopsis: [], id: "ioutat", type: "opcode"},
  ioutc: {synopsis: [], id: "ioutc", type: "opcode"},
  ioutc14: {synopsis: [], id: "ioutc14", type: "opcode"},
  ioutpat: {synopsis: [], id: "ioutpat", type: "opcode"},
  ioutpb: {synopsis: [], id: "ioutpb", type: "opcode"},
  ioutpc: {synopsis: [], id: "ioutpc", type: "opcode"},
  ipcauchy: {synopsis: [], id: "ipcauchy", type: "opcode"},
  ipoisson: {synopsis: [], id: "ipoisson", type: "opcode"},
  ipow: {synopsis: [], id: "ipow", type: "opcode"},
  is16b14: {synopsis: [], id: "is16b14", type: "opcode"},
  is32b14: {synopsis: [], id: "is32b14", type: "opcode"},
  islider16: {synopsis: [], id: "islider16", type: "opcode"},
  islider32: {synopsis: [], id: "islider32", type: "opcode"},
  islider64: {synopsis: [], id: "islider64", type: "opcode"},
  islider8: {synopsis: [], id: "islider8", type: "opcode"},
  itablecopy: {synopsis: [], id: "itablecopy", type: "opcode"},
  itablegpw: {synopsis: [], id: "itablegpw", type: "opcode"},
  itablemix: {synopsis: [], id: "itablemix", type: "opcode"},
  itablew: {synopsis: [], id: "itablew", type: "opcode"},
  itrirand: {synopsis: [], id: "itrirand", type: "opcode"},
  iunirand: {synopsis: [], id: "iunirand", type: "opcode"},
  iweibull: {synopsis: [], id: "iweibull", type: "opcode"},
  jacktransport: {
    synopsis: ["jacktransport icommand [, ilocation]"],
    id: "jacktransport",
    type: "opcode",
  },
  jitter: {
    synopsis: ["kout jitter kamp, kcpsMin, kcpsMax"],
    id: "jitter",
    type: "opcode",
  },
  jitter2: {
    synopsis: [
      "kout jitter2 ktotamp, kamp1, kcps1, kamp2, kcps2, kamp3, kcps3[ , iopt]",
    ],
    id: "jitter2",
    type: "opcode",
  },
  joystick: {
    synopsis: ["kres joystick kdevice ktab"],
    id: "joystick",
    type: "opcode",
  },
  jspline: {
    synopsis: [
      "ares jspline xamp, kcpsMin, kcpsMax",
      "kres jspline kamp, kcpsMin, kcpsMax",
    ],
    id: "jspline",
    type: "opcode",
  },
  K35_hpf: {
    synopsis: ["asig K35_hpf ain, xcf, xQ [, inlp, isaturation, istor]"],
    id: "k35_hpf",
    type: "opcode",
  },
  K35_lpf: {
    synopsis: ["asig K35_lpf ain, xcf, xQ [, inlp, isaturation, istor]"],
    id: "k35_lpf",
    type: "opcode",
  },
  kbetarand: {synopsis: [], id: "kbetarand", type: "opcode"},
  kbexprnd: {synopsis: [], id: "kbexprnd", type: "opcode"},
  kcauchy: {synopsis: [], id: "kcauchy", type: "opcode"},
  kdump: {synopsis: [], id: "kdump", type: "opcode"},
  kdump2: {synopsis: [], id: "kdump2", type: "opcode"},
  kdump3: {synopsis: [], id: "kdump3", type: "opcode"},
  kdump4: {synopsis: [], id: "kdump4", type: "opcode"},
  kexprand: {synopsis: [], id: "kexprand", type: "opcode"},
  kfilter2: {synopsis: [], id: "kfilter2", type: "opcode"},
  kgauss: {synopsis: [], id: "kgauss", type: "opcode"},
  kgoto: {synopsis: ["kgoto label"], id: "kgoto", type: "opcode"},
  klinrand: {synopsis: [], id: "klinrand", type: "opcode"},
  kon: {synopsis: [], id: "kon", type: "opcode"},
  koutat: {synopsis: [], id: "koutat", type: "opcode"},
  koutc: {synopsis: [], id: "koutc", type: "opcode"},
  koutc14: {synopsis: [], id: "koutc14", type: "opcode"},
  koutpat: {synopsis: [], id: "koutpat", type: "opcode"},
  koutpb: {synopsis: [], id: "koutpb", type: "opcode"},
  koutpc: {synopsis: [], id: "koutpc", type: "opcode"},
  kpcauchy: {synopsis: [], id: "kpcauchy", type: "opcode"},
  kpoisson: {synopsis: [], id: "kpoisson", type: "opcode"},
  kpow: {synopsis: [], id: "kpow", type: "opcode"},
  kr: {synopsis: ["kr = iarg"], id: "kr", type: "opcode"},
  kread: {synopsis: [], id: "kread", type: "opcode"},
  kread2: {synopsis: [], id: "kread2", type: "opcode"},
  kread3: {synopsis: [], id: "kread3", type: "opcode"},
  kread4: {synopsis: [], id: "kread4", type: "opcode"},
  ksmps: {synopsis: ["ksmps = iarg"], id: "ksmps", type: "opcode"},
  ktableseg: {
    synopsis: ["ktableseg ifn1, idur1, ifn2 [, idur2] [, ifn3] [...]"],
    id: "ktableseg",
    type: "opcode",
  },
  ktrirand: {synopsis: [], id: "ktrirand", type: "opcode"},
  kunirand: {synopsis: [], id: "kunirand", type: "opcode"},
  kweibull: {synopsis: [], id: "kweibull", type: "opcode"},
  lag: {
    synopsis: [
      "aout lag ain, klagtime [, initialvalue]",
      "kout lag kin, klagtime [, initialvalue]",
    ],
    id: "lag",
    type: "opcode",
  },
  lagud: {
    synopsis: [
      "aout lagud ain, klagup, klagdown [, initialvalue]",
      "kout lagud kin, klagup, klagdown [, initialvalue]",
    ],
    id: "lagud",
    type: "opcode",
  },
  lastcycle: {synopsis: ["kflag lastcycle"], id: "lastcycle", type: "opcode"},
  lenarray: {
    synopsis: ["ir lenarray karray[, iwhich]", "kr lenarray karray[, iwhich]"],
    id: "lenarray",
    type: "opcode",
  },
  "<=": {
    synopsis: ["(a <= b ? v1 : v2)"],
    id: "lessequal",
    type: "opcode",
  },
  "<": {synopsis: ["(a < b ? v1 : v2)"], id: "lessthan", type: "opcode"},
  lfo: {
    synopsis: [
      "kres lfo kamp, kcps [, itype]",
      "ares lfo kamp, kcps [, itype]",
    ],
    id: "lfo",
    type: "opcode",
  },
  lfsr: {
    synopsis: ["knum lfsr ilen, iprob [, iseed]"],
    id: "lfsr",
    type: "opcode",
  },
  limit: {
    synopsis: [
      "ares limit asig, klow, khigh",
      "ires limit isig, ilow, ihigh",
      "kres limit ksig, klow, khigh",
      "ires[] limit isig[], ilow, ihigh",
      "kres[] limit ksig[], klow, khigh",
    ],
    id: "limit",
    type: "opcode",
  },
  limit1: {
    synopsis: ["ires[] limit1 iarg", "kres[] limit1 karg"],
    id: "limit1",
    type: "opcode",
  },
  lincos: {
    synopsis: [
      "ky lincos kx, ky0, ky1 [, kx0, kx1 ]",
      "iy lincos ix, iy0, iy1 [, ix0, ix1 ]",
    ],
    id: "lincos",
    type: "opcode",
  },
  line: {
    synopsis: ["ares line ia, idur, ib", "kres line ia, idur, ib"],
    id: "line",
    type: "opcode",
  },
  linen: {
    synopsis: [
      "ares linen xamp, irise, idur, idec",
      "kres linen kamp, irise, idur, idec",
    ],
    id: "linen",
    type: "opcode",
  },
  linenr: {
    synopsis: [
      "ares linenr xamp, irise, idec, iatdec",
      "kres linenr kamp, irise, idec, iatdec",
    ],
    id: "linenr",
    type: "opcode",
  },
  lineto: {
    synopsis: ["kres lineto ksig, ktime"],
    id: "lineto",
    type: "opcode",
  },
  linlin: {
    synopsis: [
      "ky linlin kx, ky0, ky1 [, kx0, kx1 ]",
      "iy linlin ix, iy0, iy1 [, ix0, ix1 ]",
      "kys[] linlin kxs[], ky0, ky1 [, kx0, kx1 ]",
      "iys[] linlin ixs[], ky0, ky1, [ kx0, kx1 ]",
      "kC[] linlin kx, kA[], kB[] [, kx0, kx1 ]",
    ],
    id: "linlin",
    type: "opcode",
  },
  linrand: {
    synopsis: [
      "ares linrand krange",
      "ires linrand krange",
      "kres linrand krange",
    ],
    id: "linrand",
    type: "opcode",
  },
  linseg: {
    synopsis: [
      "ares linseg ia, idur1, ib [, idur2] [, ic] [...]",
      "kres linseg ia, idur1, ib [, idur2] [, ic] [...]",
    ],
    id: "linseg",
    type: "opcode",
  },
  linsegb: {
    synopsis: [
      "ares linsegb ia, itim1, ib [, itim2] [, ic] [...]",
      "kres linsegb ia, itim1, ib [, itim2] [, ic] [...]",
    ],
    id: "linsegb",
    type: "opcode",
  },
  linsegr: {
    synopsis: [
      "ares linsegr ia, idur1, ib [, idur2] [, ic] [...], irel, iz",
      "kres linsegr ia, idur1, ib [, idur2] [, ic] [...], irel, iz",
    ],
    id: "linsegr",
    type: "opcode",
  },
  liveconv: {
    synopsis: ["ares liveconv ain, ift, iplen, kupdate, kclear"],
    id: "liveconv",
    type: "opcode",
  },
  locsend: {
    synopsis: ["a1, a2 locsend", "a1, a2, a3, a4 locsend"],
    id: "locsend",
    type: "opcode",
  },
  locsig: {
    synopsis: [
      "a1, a2 locsig asig, kdegree, kdistance, kreverbsend",
      "a1, a2, a3, a4 locsig asig, kdegree, kdistance, kreverbsend",
    ],
    id: "locsig",
    type: "opcode",
  },
  log: {
    synopsis: [
      "log(x) (no rate restriction)",
      "log(k/i[]) (k- or i-arrays )",
      "kout[]log kin[],ibas",
    ],
    id: "log",
    type: "opcode",
  },
  log10: {
    synopsis: [
      "log10(x) (no rate restriction)",
      "log10(k/i[]) (k- or i-arrays )",
    ],
    id: "log10",
    type: "opcode",
  },
  log2: {
    synopsis: [
      "log2(x) (no rate restriction)",
      "log2(k/i[]) (k- or i-arrays )",
    ],
    id: "log2",
    type: "opcode",
  },
  logbtwo: {
    synopsis: ["logbtwo(x) (init-rate or control-rate args only)"],
    id: "logbtwo",
    type: "opcode",
  },
  logcurve: {
    synopsis: ["kout logcurve kindex, ksteepness"],
    id: "logcurve",
    type: "opcode",
  },
  loop_ge: {
    synopsis: [
      "loop_ge indx, idecr, imin, label",
      "loop_ge kndx, kdecr, kmin, label",
    ],
    id: "loop_ge",
    type: "opcode",
  },
  loop_gt: {
    synopsis: [
      "loop_gt indx, idecr, imin, label",
      "loop_gt kndx, kdecr, kmin, label",
    ],
    id: "loop_gt",
    type: "opcode",
  },
  loop_le: {
    synopsis: [
      "loop_le indx, incr, imax, label",
      "loop_le kndx, kncr, kmax, label",
    ],
    id: "loop_le",
    type: "opcode",
  },
  loop_lt: {
    synopsis: [
      "loop_lt indx, incr, imax, label",
      "loop_lt kndx, kncr, kmax, label",
    ],
    id: "loop_lt",
    type: "opcode",
  },
  loopseg: {
    synopsis: [
      "ksig loopseg kfreq, ktrig, iphase, kvalue0, ktime0 [, kvalue1] [, ktime1] [, kvalue2] [, ktime2][...]",
    ],
    id: "loopseg",
    type: "opcode",
  },
  loopsegp: {
    synopsis: [
      "ksig loopsegp kphase, kvalue0, kdur0, kvalue1 [, kdur1, ... , kdurN-1, kvalueN]",
    ],
    id: "loopsegp",
    type: "opcode",
  },
  looptseg: {
    synopsis: [
      "ksig looptseg kfreq, ktrig, iphase, kvalue0, ktype0, ktime0, [, kvalue1] [,ktype1] [, ktime1] [, kvalue2] [,ktype2] [, ktime2] [...] [, kvalueN] [,ktypeN] [, ktimeN]",
    ],
    id: "looptseg",
    type: "opcode",
  },
  loopxseg: {
    synopsis: [
      "ksig loopxseg kfreq, ktrig, iphase, ktime0, kvalue0 [, ktime1] [, kvalue1] [, ktime2] [, kvalue2] [...]",
    ],
    id: "loopxseg",
    type: "opcode",
  },
  lorenz: {
    synopsis: [
      "ax, ay, az lorenz ksv, krv, kbv, kh, ix, iy, iz, iskip [, iskipinit]",
    ],
    id: "lorenz",
    type: "opcode",
  },
  lorismorph: {
    synopsis: [
      "lorismorph isrcidx, itgtidx, istoreidx, kfreqmorphenv, kampmorphenv, kbwmorphenv",
    ],
    id: "lorismorph",
    type: "opcode",
  },
  lorisplay: {
    synopsis: ["ar lorisplay ireadidx, kfreqenv, kampenv, kbwenv"],
    id: "lorisplay",
    type: "opcode",
  },
  lorisread: {
    synopsis: [
      "lorisread ktimpnt, ifilcod, istoreidx, kfreqenv, kampenv, kbwenv[, ifadetime]",
    ],
    id: "lorisread",
    type: "opcode",
  },
  loscil: {
    synopsis: [
      "ar1 [,ar2] loscil xamp, kcps, ifn [, ibas] [, imod1] [, ibeg1] [, iend1] [, imod2] [, ibeg2] [, iend2]",
      "aph, ar1 [,ar2] loscilphs xamp, kcps, ifn [, ibas] [, imod1] [, ibeg1] [, iend1] [, imod2] [, ibeg2] [, iend2]",
    ],
    id: "loscil",
    type: "opcode",
  },
  loscil3: {
    synopsis: [
      "ar1 [,ar2] loscil3 xamp, kcps, ifn [, ibas] [, imod1] [, ibeg1] [, iend1] [, imod2] [, ibeg2] [, iend2]",
      "aph, ar1 [,ar2] loscil3phs xamp, kcps, ifn [, ibas] [, imod1] [, ibeg1] [, iend1] [, imod2] [, ibeg2] [, iend2]",
    ],
    id: "loscil3",
    type: "opcode",
  },
  loscilx: {
    synopsis: [
      "ar1 [, ar2, ar3, ar4, ar5, ar6, ar7, ar8, ar9, ar10, ar11, ar12, ar13, ar14, ar15, ar16] loscilx xamp, kcps, ifn [, iwsize, ibas, istrt, imod, ibeg, iend]",
      "ar[] loscilx xamp, kcps, ifn [, iwsize, ibas, istrt, imod, ibeg, iend]",
    ],
    id: "loscilx",
    type: "opcode",
  },
  lowpass2: {
    synopsis: ["ares lowpass2 asig, kcf, kq [, iskip]"],
    id: "lowpass2",
    type: "opcode",
  },
  lowres: {
    synopsis: ["ares lowres asig, xcutoff, xresonance [, iskip]"],
    id: "lowres",
    type: "opcode",
  },
  lowresx: {
    synopsis: [
      "ares lowresx asig, xcutoff, xresonance [, inumlayer] [, iskip]",
    ],
    id: "lowresx",
    type: "opcode",
  },
  lpcanal: {
    synopsis: [
      "kCoef[],krms,kerr,kcps lpcanal asrc, kflg, kprd, isiz, iord[,iwin] ",
      "kCoef[],krms,kerr,kcps lpcanal koff, kflg, ifn, isiz, iord[,iwin] ",
      "iCoef[],irms,ierr,icps lpcanal ioff, iflg, ifn, isiz, iord[,iwin] ",
    ],
    id: "lpcanal",
    type: "opcode",
  },
  lpcfilter: {
    synopsis: [
      "ares lpcfilter asig, asrc, kflg, kprd, isiz, iord[,iwin] ",
      "ares lpcfilter asig, koff, kflg, ifn, isiz, iord[,iwin] ",
    ],
    id: "lpcfilter",
    type: "opcode",
  },
  lpf18: {
    synopsis: ["ares lpf18 asig, xfco, xres, xdist [, iskip]"],
    id: "lpf18",
    type: "opcode",
  },
  lpfreson: {
    synopsis: ["ares lpfreson asig, kfrqratio"],
    id: "lpfreson",
    type: "opcode",
  },
  lphasor: {
    synopsis: [
      "ares lphasor xtrns [, ilps] [, ilpe] [, imode] [, istrt] [, istor]",
    ],
    id: "lphasor",
    type: "opcode",
  },
  lpinterp: {
    synopsis: ["lpinterp islot1, islot2, kmix"],
    id: "lpinterp",
    type: "opcode",
  },
  lposcil: {
    synopsis: ["ares lposcil kamp, kfreqratio, kloop, kend, ifn [, iphs]"],
    id: "lposcil",
    type: "opcode",
  },
  lposcil3: {
    synopsis: ["ares lposcil3 kamp, kfreqratio, kloop, kend, ifn [, iphs]"],
    id: "lposcil3",
    type: "opcode",
  },
  lposcila: {
    synopsis: ["ar lposcila aamp, kfreqratio, kloop, kend, ift [,iphs] "],
    id: "lposcila",
    type: "opcode",
  },
  lposcilsa: {
    synopsis: [
      "ar1, ar2 lposcilsa aamp, kfreqratio, kloop, kend, ift [,iphs] ",
    ],
    id: "lposcilsa",
    type: "opcode",
  },
  lposcilsa2: {
    synopsis: [
      "ar1, ar2 lposcilsa2 aamp, kfreqratio, kloop, kend, ift [,iphs] ",
    ],
    id: "lposcilsa2",
    type: "opcode",
  },
  lpread: {
    synopsis: [
      "krmsr, krmso, kerr, kcps lpread ktimpnt, ifilcod [, inpoles] [, ifrmrate]",
    ],
    id: "lpread",
    type: "opcode",
  },
  lpreson: {synopsis: ["ares lpreson asig"], id: "lpreson", type: "opcode"},
  lpshold: {
    synopsis: [
      "ksig lpshold kfreq, ktrig, iphase, ktime0, kvalue0 [, kvalue1] [, ktime1] [, kvalue2] [, ktime2] [...]",
    ],
    id: "lpshold",
    type: "opcode",
  },
  lpsholdp: {
    synopsis: [
      "ksig lpsholdp kphase, kvalue0, ktime0 [, kvalue1] [, ktime1] [, kvalue2] [, ktime2] [...]",
    ],
    id: "lpsholdp",
    type: "opcode",
  },
  lpslot: {synopsis: ["lpslot islot"], id: "lpslot", type: "opcode"},
  lufs: {
    synopsis: ["kmom, kint, kshort lufs kreset, ain1 [, ain2]"],
    id: "lufs",
    type: "opcode",
  },
  mac: {
    synopsis: [
      "ares mac ksig1, asig1 [, ksig2] [, asig2] [, ksig3] [, asig3] [...]",
    ],
    id: "mac",
    type: "opcode",
  },
  maca: {
    synopsis: ["ares maca asig1 , asig2 [, asig3] [, asig4] [, asig5] [...]"],
    id: "maca",
    type: "opcode",
  },
  madsr: {
    synopsis: [
      "ares madsr iatt, idec, islev, irel [, idel] [, ireltim]",
      "kres madsr iatt, idec, islev, irel [, idel] [, ireltim]",
    ],
    id: "madsr",
    type: "opcode",
  },
  mags: {synopsis: ["kout[] mags kin[]"], id: "mags", type: "opcode"},
  mandel: {
    synopsis: ["kiter, koutrig mandel ktrig, kx, ky, kmaxIter"],
    id: "mandel",
    type: "opcode",
  },
  mandol: {
    synopsis: [
      "ares mandol kamp, kfreq, kpluck, kdetune, kgain, ksize [, ifn] [, iminfreq]",
    ],
    id: "mandol",
    type: "opcode",
  },
  maparray: {
    synopsis: [
      "karray maparray kinarray, String",
      "karray maparray_i kinarray, String",
    ],
    id: "maparray",
    type: "opcode",
  },
  marimba: {
    synopsis: [
      "ares marimba kamp, kfreq, ihrd, ipos, imp, kvibf, kvamp, ivibfn, idec [, idoubles] [, itriples]",
    ],
    id: "marimba",
    type: "opcode",
  },
  massign: {
    synopsis: [
      "massign ichnl, insnum[, ireset]",
      'massign ichnl, "insname"[, ireset]',
    ],
    id: "massign",
    type: "opcode",
  },
  max: {
    synopsis: [
      "amax max ain1, ain2 [, ain3] [, ain4] [...]",
      "kmax max kin1, kin2 [, kin3] [, kin4] [...]",
      "imax max iin1, iin2 [, iin3] [, iin4] [...]",
    ],
    id: "max",
    type: "opcode",
  },
  max_k: {
    synopsis: ["knumkout max_k asig, ktrig, itype"],
    id: "max_k",
    type: "opcode",
  },
  maxabs: {
    synopsis: [
      "amax maxabs ain1, ain2 [, ain3] [, ain4] [...]",
      "kmax maxabs kin1, kin2 [, kin3] [, kin4] [...]",
    ],
    id: "maxabs",
    type: "opcode",
  },
  maxabsaccum: {
    synopsis: ["maxabsaccum aAccumulator, aInput"],
    id: "maxabsaccum",
    type: "opcode",
  },
  maxaccum: {
    synopsis: ["maxaccum aAccumulator, aInput"],
    id: "maxaccum",
    type: "opcode",
  },
  maxalloc: {
    synopsis: ["maxalloc insnum, icount", "maxalloc Sinsname, icount"],
    id: "maxalloc",
    type: "opcode",
  },
  maxarray: {
    synopsis: ["kmax [,kindx] maxarray karray"],
    id: "maxarray",
    type: "opcode",
  },
  mclock: {synopsis: ["mclock ifreq"], id: "mclock", type: "opcode"},
  mdelay: {
    synopsis: ["mdelay kstatus, kchan, kd1, kd2, kdelay"],
    id: "mdelay",
    type: "opcode",
  },
  median: {
    synopsis: ["ares median asig, ksize, imaxsize [, iskip]"],
    id: "median",
    type: "opcode",
  },
  mediank: {
    synopsis: ["kres mediank kin, ksize, imaxsize [, iskip]"],
    id: "mediank",
    type: "opcode",
  },
  metro: {
    synopsis: ["ktrig metro kfreq [, initphase]"],
    id: "metro",
    type: "opcode",
  },
  metro2: {
    synopsis: ["ktrig metro2 kfreq, kswing [, iamp, initphase]"],
    id: "metro2",
    type: "opcode",
  },
  mfb: {
    synopsis: ["kout[] mfb kin[],klow,khigh,ibands"],
    id: "mfb",
    type: "opcode",
  },
  midglobal: {
    synopsis: ["midglobal isource, instrnum [,instrnum...] "],
    id: "midglobal",
    type: "opcode",
  },
  midiarp: {
    synopsis: ["kMidiNoteNum, kCounter midiarp kRate[, kMode]"],
    id: "midiarp",
    type: "opcode",
  },
  midic14: {
    synopsis: [
      "idest midic14 ictlno1, ictlno2, imin, imax [, ifn]",
      "kdest midic14 ictlno1, ictlno2, kmin, kmax [, ifn]",
    ],
    id: "midic14",
    type: "opcode",
  },
  midic21: {
    synopsis: [
      "idest midic21 ictlno1, ictlno2, ictlno3, imin, imax [, ifn]",
      "kdest midic21 ictlno1, ictlno2, ictlno3, kmin, kmax [, ifn]",
    ],
    id: "midic21",
    type: "opcode",
  },
  midic7: {
    synopsis: [
      "idest midic7 ictlno, imin, imax [, ifn]",
      "kdest midic7 ictlno, kmin, kmax [, ifn]",
    ],
    id: "midic7",
    type: "opcode",
  },
  midichannelaftertouch: {
    synopsis: ["midichannelaftertouch xchannelaftertouch [, ilow] [, ihigh]"],
    id: "midichannelaftertouch",
    type: "opcode",
  },
  midichn: {synopsis: ["ichn midichn"], id: "midichn", type: "opcode"},
  midicontrolchange: {
    synopsis: [
      "midicontrolchange xcontroller, xcontrollervalue [, ilow] [, ihigh]",
    ],
    id: "midicontrolchange",
    type: "opcode",
  },
  midictrl: {
    synopsis: [
      "ival midictrl inum [, imin] [, imax]",
      "kval midictrl inum [, imin] [, imax]",
    ],
    id: "midictrl",
    type: "opcode",
  },
  mididefault: {
    synopsis: ["mididefault xdefault, xvalue"],
    id: "mididefault",
    type: "opcode",
  },
  midifilestatus: {
    synopsis: ["ksig midifilestatus"],
    id: "midifilestatus",
    type: "opcode",
  },
  midiin: {
    synopsis: ["kstatus, kchan, kdata1, kdata2 midiin"],
    id: "midiin",
    type: "opcode",
  },
  midinoteoff: {
    synopsis: ["midinoteoff xkey, xvelocity"],
    id: "midinoteoff",
    type: "opcode",
  },
  midinoteoncps: {
    synopsis: ["midinoteoncps xcps, xvelocity"],
    id: "midinoteoncps",
    type: "opcode",
  },
  midinoteonkey: {
    synopsis: ["midinoteonkey xkey, xvelocity"],
    id: "midinoteonkey",
    type: "opcode",
  },
  midinoteonoct: {
    synopsis: ["midinoteonoct xoct, xvelocity"],
    id: "midinoteonoct",
    type: "opcode",
  },
  midinoteonpch: {
    synopsis: ["midinoteonpch xpch, xvelocity"],
    id: "midinoteonpch",
    type: "opcode",
  },
  midion: {
    synopsis: ["midion kchn, knum, kvel"],
    id: "midion",
    type: "opcode",
  },
  midion2: {
    synopsis: ["midion2 kchn, knum, kvel, ktrig"],
    id: "midion2",
    type: "opcode",
  },
  midiout: {
    synopsis: ["midiout kstatus, kchan, kdata1, kdata2"],
    id: "midiout",
    type: "opcode",
  },
  midiout_i: {
    synopsis: ["midiout_i istatus, ichan, idata1, idata2"],
    id: "midiout_i",
    type: "opcode",
  },
  midipitchbend: {
    synopsis: ["midipitchbend xpitchbend [, ilow] [, ihigh]"],
    id: "midipitchbend",
    type: "opcode",
  },
  midipolyaftertouch: {
    synopsis: ["midipolyaftertouch xpolyaftertouch, xkey [, ilow] [, ihigh]"],
    id: "midipolyaftertouch",
    type: "opcode",
  },
  midiprogramchange: {
    synopsis: ["midiprogramchange xprogram"],
    id: "midiprogramchange",
    type: "opcode",
  },
  miditempo: {synopsis: ["ksig miditempo"], id: "miditempo", type: "opcode"},
  midremot: {
    synopsis: ["midremot idestination, isource, instrnum [,instrnum...] "],
    id: "midremot",
    type: "opcode",
  },
  min: {
    synopsis: [
      "amin min ain1, ain2 [, ain3] [, ain4] [...]",
      "kmin min kin1, kin2 [, kin3] [, kin4] [...]",
      "imin min iin1, iin2 [, iin3] [, iin4] [...]",
    ],
    id: "min",
    type: "opcode",
  },
  minabs: {
    synopsis: [
      "amin minabs ain1, ain2 [, ain3] [, ain4] [...]",
      "kmin minabs kin1, kin2 [, kin3] [, kin4] [...]",
    ],
    id: "minabs",
    type: "opcode",
  },
  minabsaccum: {
    synopsis: ["minabsaccum aAccumulator, aInput"],
    id: "minabsaccum",
    type: "opcode",
  },
  minaccum: {
    synopsis: ["minaccum aAccumulator, aInput"],
    id: "minaccum",
    type: "opcode",
  },
  minarray: {
    synopsis: ["kmin [,kindx] minarray karray"],
    id: "minarray",
    type: "opcode",
  },
  mincer: {
    synopsis: [
      "asig mincer atimpt, kamp, kpitch, ktab, klock[,ifftsize,idecim] ",
    ],
    id: "mincer",
    type: "opcode",
  },
  mirror: {
    synopsis: [
      "ares mirror asig, klow, khigh",
      "ires mirror isig, ilow, ihigh",
      "kres mirror ksig, klow, khigh",
    ],
    id: "mirror",
    type: "opcode",
  },
  MixerClear: {synopsis: ["MixerClear"], id: "MixerClear", type: "opcode"},
  MixerGetLevel: {
    synopsis: ["kgain MixerGetLevel isend, ibuss"],
    id: "MixerGetLevel",
    type: "opcode",
  },
  MixerReceive: {
    synopsis: ["asignal MixerReceive ibuss, ichannel"],
    id: "MixerReceive",
    type: "opcode",
  },
  MixerSend: {
    synopsis: ["MixerSend asignal, isend, ibuss, ichannel"],
    id: "MixerSend",
    type: "opcode",
  },
  MixerSetLevel: {
    synopsis: ["MixerSetLevel isend, ibuss, kgain"],
    id: "MixerSetLevel",
    type: "opcode",
  },
  MixerSetLevel_i: {
    synopsis: ["MixerSetLevel_i isend, ibuss, igain"],
    id: "MixerSetLevel_i",
    type: "opcode",
  },
  mode: {
    synopsis: ["aout mode ain, xfreq, xQ [, iskip]"],
    id: "mode",
    type: "opcode",
  },
  modmatrix: {
    synopsis: [
      "modmatrix iresfn, isrcmodfn, isrcparmfn, imodscale, inum_mod, inum_parm, kupdate",
    ],
    id: "modmatrix",
    type: "opcode",
  },
  "%": {
    synopsis: ["a % b (no rate restriction)"],
    id: "modulus",
    type: "opcode",
  },
  monitor: {
    synopsis: ["aout1 [,aout2 ... aoutX] monitor", "aarra monitor"],
    id: "monitor",
    type: "opcode",
  },
  moog: {
    synopsis: [
      "ares moog kamp, kfreq, kfiltq, kfiltrate, kvibf, kvamp, iafn, iwfn, ivfn",
    ],
    id: "moog",
    type: "opcode",
  },
  moogladder: {
    synopsis: [
      "asig moogladder ain, kcf, kres[, istor]",
      "asig moogladder ain, acf, kres[, istor]",
      "asig moogladder ain, kcf, ares[, istor]",
      "asig moogladder ain, acf, ares[, istor]",
    ],
    id: "moogladder",
    type: "opcode",
  },
  moogladder2: {
    synopsis: [
      "asig moogladder2 ain, kcf, kres[, istor]",
      "asig moogladder2 ain, acf, kres[, istor]",
      "asig moogladder2 ain, kcf, ares[, istor]",
      "asig moogladder2 ain, acf, ares[, istor]",
    ],
    id: "moogladder2",
    type: "opcode",
  },
  moogvcf: {
    synopsis: ["ares moogvcf asig, xfco, xres [,iscale, iskip]"],
    id: "moogvcf",
    type: "opcode",
  },
  moogvcf2: {
    synopsis: ["ares moogvcf2 asig, xfco, xres [,iscale, iskip]"],
    id: "moogvcf2",
    type: "opcode",
  },
  moscil: {
    synopsis: ["moscil kchn, knum, kvel, kdur, kpause"],
    id: "moscil",
    type: "opcode",
  },
  mp3in: {
    synopsis: [
      "ar1, ar2 mp3in ifilcod[, iskptim, iformat, iskipinit, ibufsize]",
      "ar1 mp3in ifilcod[, iskptim, iformat, iskipinit, ibufsize]",
    ],
    id: "mp3in",
    type: "opcode",
  },
  mp3len: {synopsis: ["ir mp3len ifilcod"], id: "mp3len", type: "opcode"},
  mp3scal: {
    synopsis: [
      "asig, asig2, ktime mp3scal Sfile, ktimescal, kpitch, kamp[, iskip, ifftsize, idecim, ilock] ",
    ],
    id: "mp3scal",
    type: "opcode",
  },
  mpulse: {
    synopsis: ["ares mpulse kamp, kintvl [, ioffset]"],
    id: "mpulse",
    type: "opcode",
  },
  mrtmsg: {synopsis: ["mrtmsg imsgtype"], id: "mrtmsg", type: "opcode"},
  mtof: {
    synopsis: [
      "ifreq mtof imidi",
      "kfreq mtof kmidi",
      "ifreqs[] mtof imidis[]",
      "kfreqs[] mtof kmidis[]",
    ],
    id: "mtof",
    type: "opcode",
  },
  mton: {
    synopsis: ["Snote mton kmidi", "Snote mton imidi"],
    id: "mton",
    type: "opcode",
  },
  "*": {
    synopsis: ["a * b (no rate restriction)"],
    id: "multiplies",
    type: "opcode",
  },
  multitap: {
    synopsis: [
      "ares multitap asig [, itime1, igain1] [, itime2, igain2] [...]",
    ],
    id: "multitap",
    type: "opcode",
  },
  mute: {
    synopsis: ["mute insnum [, iswitch]", 'mute "insname" [, iswitch]'],
    id: "mute",
    type: "opcode",
  },
  mvchpf: {
    synopsis: ["asig mvchpf ain, xcf[, istor]"],
    id: "mvchpf",
    type: "opcode",
  },
  mvclpf1: {
    synopsis: ["asig mvclpf1 ain, xcf, xres[,istor]"],
    id: "mvclpf1",
    type: "opcode",
  },
  mvclpf2: {
    synopsis: ["asig mvclpf2 ain, xcf, xres[, istor]"],
    id: "mvclpf2",
    type: "opcode",
  },
  mvclpf3: {
    synopsis: ["asig mvclpf3 ain, xcf, xres[, istor]"],
    id: "mvclpf3",
    type: "opcode",
  },
  mvclpf4: {
    synopsis: ["asig1,asig2,asig3,asig4 mvclpf4 ain, xcf, xres[, istor]"],
    id: "mvclpf4",
    type: "opcode",
  },
  mxadsr: {
    synopsis: [
      "ares mxadsr iatt, idec, islev, irel [, idel] [, ireltim]",
      "kres mxadsr iatt, idec, islev, irel [, idel] [, ireltim]",
    ],
    id: "mxadsr",
    type: "opcode",
  },
  nchnls: {synopsis: ["nchnls = iarg"], id: "nchnls", type: "opcode"},
  nchnls_hw: {
    synopsis: ["idacc,iadcc nchnls_hw"],
    id: "nchnls_hw",
    type: "opcode",
  },
  nchnls_i: {synopsis: ["nchnls_i = iarg"], id: "nchnls_i", type: "opcode"},
  nestedap: {
    synopsis: [
      "ares nestedap asig, imode, imaxdel, idel1, igain1 [, idel2] [, igain2] [, idel3] [, igain3] [, istor]",
    ],
    id: "nestedap",
    type: "opcode",
  },
  nlfilt: {
    synopsis: ["ares nlfilt ain, ka, kb, kd, kC, kL"],
    id: "nlfilt",
    type: "opcode",
  },
  nlfilt2: {
    synopsis: ["ares nlfilt2 ain, ka, kb, kd, kC, kL"],
    id: "nlfilt2",
    type: "opcode",
  },
  noise: {
    synopsis: ["ares noise xamp, kbeta"],
    id: "noise",
    type: "opcode",
  },
  noteoff: {
    synopsis: ["noteoff ichn, inum, ivel"],
    id: "noteoff",
    type: "opcode",
  },
  noteon: {
    synopsis: ["noteon ichn, inum, ivel"],
    id: "noteon",
    type: "opcode",
  },
  noteondur: {
    synopsis: ["noteondur ichn, inum, ivel, idur"],
    id: "noteondur",
    type: "opcode",
  },
  noteondur2: {
    synopsis: ["noteondur2 ichn, inum, ivel, idur"],
    id: "noteondur2",
    type: "opcode",
  },
  "!=": {
    synopsis: ["(a != b ? v1 : v2)"],
    id: "notequal",
    type: "opcode",
  },
  notnum: {synopsis: ["ival notnum"], id: "notnum", type: "opcode"},
  nreverb: {
    synopsis: [
      "ares nreverb asig, ktime, khdif [, iskip] [,inumCombs] [, ifnCombs] [, inumAlpas] [, ifnAlpas]",
    ],
    id: "nreverb",
    type: "opcode",
  },
  nrpn: {
    synopsis: ["nrpn kchan, kparmnum, kparmvalue"],
    id: "nrpn",
    type: "opcode",
  },
  nsamp: {
    synopsis: ["nsamp(x) (init-rate args only)"],
    id: "nsamp",
    type: "opcode",
  },
  nstance: {
    synopsis: [
      "iHandle nstance insnum, iwhen, idur [, ip4] [, ip5] [...]",
      'iHandle nstance "insname", iwhen, idur [, ip4] [, ip5] [...]',
    ],
    id: "nstance",
    type: "opcode",
  },
  nstrnum: {
    synopsis: ['insno nstrnum "name"'],
    id: "nstrnum",
    type: "opcode",
  },
  nstrstr: {
    synopsis: ["Sname nstrstr insno", "Sname nstrstr knsno"],
    id: "nstrstr",
    type: "opcode",
  },
  ntof: {
    synopsis: ["kfreq ntof Snote", "ifreq ntof Snote"],
    id: "ntof",
    type: "opcode",
  },
  ntom: {
    synopsis: ["kmidi ntom Snote", "imidi ntom Snote"],
    id: "ntom",
    type: "opcode",
  },
  ntrpol: {
    synopsis: [
      "ares ntrpol asig1, asig2, kpoint [, imin] [, imax]",
      "ires ntrpol isig1, isig2, ipoint [, imin] [, imax]",
      "kres ntrpol ksig1, ksig2, kpoint [, imin] [, imax]",
    ],
    id: "ntrpol",
    type: "opcode",
  },
  octave: {synopsis: ["octave(x)"], id: "octave", type: "opcode"},
  octcps: {
    synopsis: ["octcps (cps) (init- or control-rate args only)"],
    id: "octcps",
    type: "opcode",
  },
  octmidi: {synopsis: ["ioct octmidi"], id: "octmidi", type: "opcode"},
  octmidib: {
    synopsis: ["ioct octmidib [irange]", "koct octmidib [irange]"],
    id: "octmidib",
    type: "opcode",
  },
  octmidinn: {
    synopsis: ["octmidinn (MidiNoteNumber) (init- or control-rate args only)"],
    id: "octmidinn",
    type: "opcode",
  },
  octpch: {
    synopsis: ["octpch (pch) (init- or control-rate args only)"],
    id: "octpch",
    type: "opcode",
  },
  olabuffer: {
    synopsis: ["aout olabuffer kin, ioverlap"],
    id: "olabuffer",
    type: "opcode",
  },
  "&&": {
    synopsis: ["a && b (logical AND; not audio-rate)"],
    id: "opand",
    type: "opcode",
  },
  "&": {
    synopsis: ["a & b (bitwise AND)"],
    id: "opbitand",
    type: "opcode",
  },
  "¬": {
    synopsis: ["a >> b (bitshift left)"],
    id: "opbitshr",
    type: "opcode",
  },
  "||": {
    synopsis: ["a || b (bitwise OR)"],
    id: "opbitor",
    type: "opcode",
  },
  opcode: {
    synopsis: ["opcode name, outtypes, intypes"],
    id: "opcode",
    type: "opcode",
  },
  "#": {
    synopsis: ["a # b (bitwise NON EQUIVALENCE)"],
    id: "opnonequiv",
    type: "opcode",
  },
  "!": {
    synopsis: ["! a (logical NOT; not audio-rate)"],
    id: "opnot",
    type: "opcode",
  },
  "||||": {
    synopsis: ["a |||| b (logical OR; not audio-rate)"],
    id: "opor",
    type: "opcode",
  },
  oscbnk: {
    synopsis: [
      "ares oscbnk kcps, kamd, kfmd, kpmd, iovrlap, iseed, kl1minf, kl1maxf, kl2minf, kl2maxf, ilfomode, keqminf, keqmaxf, keqminl, keqmaxl, keqminq, keqmaxq, ieqmode, kfn [, il1fn] [, il2fn] [, ieqffn] [, ieqlfn] [, ieqqfn] [, itabl] [, ioutfn]",
    ],
    id: "oscbnk",
    type: "opcode",
  },
  oscil: {
    synopsis: [
      "ares oscil xamp, xcps [, ifn, iphs]",
      "kres oscil kamp, kcps [, ifn, iphs]",
    ],
    id: "oscil",
    type: "opcode",
  },
  oscil1: {
    synopsis: ["kres oscil1 idel, kamp, idur [, ifn]"],
    id: "oscil1",
    type: "opcode",
  },
  oscil1i: {
    synopsis: ["kres oscil1i idel, kamp, idur [, ifn]"],
    id: "oscil1i",
    type: "opcode",
  },
  oscil3: {
    synopsis: [
      "ares oscil3 xamp, xcps [, ifn, iphs]",
      "kres oscil3 kamp, kcps [, ifn, iphs]",
    ],
    id: "oscil3",
    type: "opcode",
  },
  oscili: {
    synopsis: [
      "ares oscili xamp, xcps[, ifn, iphs]",
      "kres oscili kamp, kcps[, ifn, iphs]",
    ],
    id: "oscili",
    type: "opcode",
  },
  oscilikt: {
    synopsis: [
      "ares oscilikt xamp, xcps, kfn [, iphs] [, istor]",
      "kres oscilikt kamp, kcps, kfn [, iphs] [, istor]",
    ],
    id: "oscilikt",
    type: "opcode",
  },
  osciliktp: {
    synopsis: ["ares osciliktp kcps, kfn, kphs [, istor]"],
    id: "osciliktp",
    type: "opcode",
  },
  oscilikts: {
    synopsis: ["ares oscilikts xamp, xcps, kfn, async, kphs [, istor]"],
    id: "oscilikts",
    type: "opcode",
  },
  osciln: {
    synopsis: ["ares osciln kamp, ifrq, ifn, itimes"],
    id: "osciln",
    type: "opcode",
  },
  oscils: {
    synopsis: ["ares oscils iamp, icps, iphs [, iflg]"],
    id: "oscils",
    type: "opcode",
  },
  oscilx: {synopsis: [], id: "oscilx", type: "opcode"},
  out: {
    synopsis: ["out asig1[, asig2,....]", "out aarray"],
    id: "out",
    type: "opcode",
  },
  out32: {
    synopsis: [
      "out32 asig1, asig2, asig3, asig4, asig5, asig6, asig7, asig8, asig10, asig11, asig12, asig13, asig14, asig15, asig16, asig17, asig18, asig19, asig20, asig21, asig22, asig23, asig24, asig25, asig26, asig27, asig28, asig29, asig30, asig31, asig32",
    ],
    id: "out32",
    type: "opcode",
  },
  outc: {
    synopsis: ["outc asig1 [, asig2] [...]"],
    id: "outc",
    type: "opcode",
  },
  outch: {
    synopsis: ["outch kchan1, asig1 [, kchan2] [, asig2] [...]"],
    id: "outch",
    type: "opcode",
  },
  outh: {
    synopsis: ["outh asig1, asig2, asig3, asig4, asig5, asig6"],
    id: "outh",
    type: "opcode",
  },
  outiat: {
    synopsis: ["outiat ichn, ivalue, imin, imax"],
    id: "outiat",
    type: "opcode",
  },
  outic: {
    synopsis: ["outic ichn, inum, ivalue, imin, imax"],
    id: "outic",
    type: "opcode",
  },
  outic14: {
    synopsis: ["outic14 ichn, imsb, ilsb, ivalue, imin, imax"],
    id: "outic14",
    type: "opcode",
  },
  outipat: {
    synopsis: ["outipat ichn, inotenum, ivalue, imin, imax"],
    id: "outipat",
    type: "opcode",
  },
  outipb: {
    synopsis: ["outipb ichn, ivalue, imin, imax"],
    id: "outipb",
    type: "opcode",
  },
  outipc: {
    synopsis: ["outipc ichn, iprog, imin, imax"],
    id: "outipc",
    type: "opcode",
  },
  outkat: {
    synopsis: ["outkat kchn, kvalue, kmin, kmax"],
    id: "outkat",
    type: "opcode",
  },
  outkc: {
    synopsis: ["outkc kchn, knum, kvalue, kmin, kmax"],
    id: "outkc",
    type: "opcode",
  },
  outkc14: {
    synopsis: ["outkc14 kchn, kmsb, klsb, kvalue, kmin, kmax"],
    id: "outkc14",
    type: "opcode",
  },
  outkpat: {
    synopsis: ["outkpat kchn, knotenum, kvalue, kmin, kmax"],
    id: "outkpat",
    type: "opcode",
  },
  outkpb: {
    synopsis: ["outkpb kchn, kvalue, kmin, kmax"],
    id: "outkpb",
    type: "opcode",
  },
  outkpc: {
    synopsis: ["outkpc kchn, kprog, kmin, kmax"],
    id: "outkpc",
    type: "opcode",
  },
  outleta: {
    synopsis: ["outleta Sname, asignal"],
    id: "outleta",
    type: "opcode",
  },
  outletf: {
    synopsis: ["outletf Sname, fsignal"],
    id: "outletf",
    type: "opcode",
  },
  outletk: {
    synopsis: ["outletk Sname, ksignal"],
    id: "outletk",
    type: "opcode",
  },
  outletkid: {
    synopsis: ["outletkid Sname, SinstanceID, ksignal"],
    id: "outletkid",
    type: "opcode",
  },
  outletv: {
    synopsis: ["outletv Sname, array"],
    id: "outletv",
    type: "opcode",
  },
  outo: {
    synopsis: ["outo asig1, asig2, asig3, asig4, asig5, asig6, asig7, asig8"],
    id: "outo",
    type: "opcode",
  },
  outq: {
    synopsis: ["outq asig1, asig2, asig3, asig4"],
    id: "outq",
    type: "opcode",
  },
  outq1: {synopsis: ["outq1 asig"], id: "outq1", type: "opcode"},
  outq2: {synopsis: ["outq2 asig"], id: "outq2", type: "opcode"},
  outq3: {synopsis: ["outq3 asig"], id: "outq3", type: "opcode"},
  outq4: {synopsis: ["outq4 asig"], id: "outq4", type: "opcode"},
  outrg: {
    synopsis: ["outrg kstart, aout1 [,aout2, aout3, ..., aoutN]"],
    id: "outrg",
    type: "opcode",
  },
  outs: {synopsis: ["outs asig1, asig2"], id: "outs", type: "opcode"},
  outs1: {synopsis: ["outs1 asig"], id: "outs1", type: "opcode"},
  outs2: {synopsis: ["outs2 asig"], id: "outs2", type: "opcode"},
  outvalue: {
    synopsis: [
      'outvalue "channel name", ivalue',
      'outvalue "channel name", kvalue',
      'outvalue "channel name", "string"',
    ],
    id: "outvalue",
    type: "opcode",
  },
  outx: {
    synopsis: [
      "outx asig1, asig2, asig3, asig4, asig5, asig6, asig7, asig8, asig9, asig10, asig11, asig12, asig13, asig14, asig15, asig16",
    ],
    id: "outx",
    type: "opcode",
  },
  outz: {synopsis: ["outz ksig1"], id: "outz", type: "opcode"},
  p: {synopsis: ["p(x) "], id: "p", type: "opcode"},
  p5gconnect: {synopsis: ["p5gconnect"], id: "p5gconnect", type: "opcode"},
  p5gdata: {
    synopsis: ["kres p5gdata kcontrol"],
    id: "p5gdata",
    type: "opcode",
  },
  pan: {
    synopsis: ["a1, a2, a3, a4 pan asig, kx, ky, ifn [, imode] [, ioffset]"],
    id: "pan",
    type: "opcode",
  },
  pan2: {
    synopsis: ["a1, a2 pan2 asig, xp [, imode]"],
    id: "pan2",
    type: "opcode",
  },
  pareq: {
    synopsis: ["ares pareq asig, kc, kv, kq [, imode] [, iskip]"],
    id: "pareq",
    type: "opcode",
  },
  part2txt: {
    synopsis: ["part2txt SFile,ftrks"],
    id: "part2txt",
    type: "opcode",
  },
  partials: {
    synopsis: [
      "ftrks partials ffr, fphs, kthresh, kminpts, kmaxgap, imaxtracks",
    ],
    id: "partials",
    type: "opcode",
  },
  partikkel: {
    synopsis: [
      "a1 [, a2, a3, a4, a5, a6, a7, a8] partikkel agrainfreq, kdistribution, idisttab, async, kenv2amt, ienv2tab, ienv_attack, ienv_decay, ksustain_amount, ka_d_ratio, kduration, kamp, igainmasks, kwavfreq, ksweepshape, iwavfreqstarttab, iwavfreqendtab, awavfm, ifmamptab, kfmenv, icosine, ktraincps, knumpartials, kchroma, ichannelmasks, krandommask, kwaveform1, kwaveform2, kwaveform3, kwaveform4, iwaveamptab, asamplepos1, asamplepos2, asamplepos3, asamplepos4, kwavekey1, kwavekey2, kwavekey3, kwavekey4, imax_grains [, iopcode_id, ipanlaws]",
    ],
    id: "partikkel",
    type: "opcode",
  },
  partikkelget: {
    synopsis: ["kindex partikkelget kparameterindex, iopcode_id"],
    id: "partikkelget",
    type: "opcode",
  },
  partikkelset: {
    synopsis: ["partikkelset kparameterindex, kmaskindex, iopcode_id"],
    id: "partikkelset",
    type: "opcode",
  },
  partikkelsync: {
    synopsis: ["async [,aphase] partikkelsync iopcode_id"],
    id: "partikkelsync",
    type: "opcode",
  },
  passign: {
    synopsis: [
      " ivar1, ... passign [istart][, iend",
      " iarray passign [istart][, iend",
      " karray passign [istart][, iend",
    ],
    id: "passign",
    type: "opcode",
  },
  paulstretch: {
    synopsis: ["asig paulstretch istretch, iwindowsize, ift "],
    id: "paulstretch",
    type: "opcode",
  },
  pcauchy: {
    synopsis: [
      "ares pcauchy kalpha",
      "ires pcauchy kalpha",
      "kres pcauchy kalpha",
    ],
    id: "pcauchy",
    type: "opcode",
  },
  pchbend: {
    synopsis: [
      "ibend pchbend [imin] [, imax]",
      "kbend pchbend [imin] [, imax]",
    ],
    id: "pchbend",
    type: "opcode",
  },
  pchmidi: {synopsis: ["ipch pchmidi"], id: "pchmidi", type: "opcode"},
  pchmidib: {
    synopsis: ["ipch pchmidib [irange]", "kpch pchmidib [irange]"],
    id: "pchmidib",
    type: "opcode",
  },
  pchmidinn: {
    synopsis: ["pchmidinn (MidiNoteNumber) (init- or control-rate args only)"],
    id: "pchmidinn",
    type: "opcode",
  },
  pchoct: {
    synopsis: ["pchoct (oct) (init- or control-rate args only)"],
    id: "pchoct",
    type: "opcode",
  },
  pchtom: {
    synopsis: ["imidi pchtom ipch", "kmidi pchtom kpch"],
    id: "pchtom",
    type: "opcode",
  },
  pconvolve: {
    synopsis: [
      "ar1 [, ar2] [, ar3] [, ar4] pconvolve ain, ifilcod [, ipartitionsize, ichannel]",
    ],
    id: "pconvolve",
    type: "opcode",
  },
  pcount: {synopsis: ["icount pcount"], id: "pcount", type: "opcode"},
  pdclip: {
    synopsis: ["aout pdclip ain, kWidth, kCenter [, ibipolar [, ifullscale]]"],
    id: "pdclip",
    type: "opcode",
  },
  pdhalf: {
    synopsis: ["aout pdhalf ain, kShapeAmount [, ibipolar [, ifullscale]]"],
    id: "pdhalf",
    type: "opcode",
  },
  pdhalfy: {
    synopsis: ["aout pdhalfy ain, kShapeAmount [, ibipolar [, ifullscale]]"],
    id: "pdhalfy",
    type: "opcode",
  },
  peak: {
    synopsis: ["kres peak asig", "kres peak ksig"],
    id: "peak",
    type: "opcode",
  },
  peakk: {synopsis: [], id: "peakk", type: "opcode"},
  pgmassign: {
    synopsis: [
      "pgmassign ipgm, inst[, ichn]",
      'pgmassign ipgm, "insname"[, ichn]',
    ],
    id: "pgmassign",
    type: "opcode",
  },
  phaser1: {
    synopsis: ["ares phaser1 asig, kfreq, kord, kfeedback [, iskip]"],
    id: "phaser1",
    type: "opcode",
  },
  phaser2: {
    synopsis: ["ares phaser2 asig, kfreq, kq, kord, kmode, ksep, kfeedback"],
    id: "phaser2",
    type: "opcode",
  },
  phasor: {
    synopsis: ["ares phasor xcps [, iphs]", "kres phasor kcps [, iphs]"],
    id: "phasor",
    type: "opcode",
  },
  phasorbnk: {
    synopsis: [
      "ares phasorbnk xcps, kndx, icnt [, iphs]",
      "kres phasorbnk kcps, kndx, icnt [, iphs]",
    ],
    id: "phasorbnk",
    type: "opcode",
  },
  phs: {synopsis: ["kout[] phs kin[]"], id: "phs", type: "opcode"},
  pindex: {
    synopsis: ["ivalue pindex ipfieldIndex"],
    id: "pindex",
    type: "opcode",
  },
  pinker: {synopsis: ["ares pinker"], id: "pinker", type: "opcode"},
  pinkish: {
    synopsis: [
      "ares pinkish xin [, imethod] [, inumbands] [, iseed] [, iskip]",
    ],
    id: "pinkish",
    type: "opcode",
  },
  pitch: {
    synopsis: [
      "koct, kamp pitch asig, iupdte, ilo, ihi, idbthresh [, ifrqs] [, iconf] [, istrt] [, iocts] [, iq] [, inptls] [, irolloff] [, iskip]",
    ],
    id: "pitch",
    type: "opcode",
  },
  pitchamdf: {
    synopsis: [
      "kcps, krms pitchamdf asig, imincps, imaxcps [, icps] [, imedi] [, idowns] [, iexcps] [, irmsmedi]",
    ],
    id: "pitchamdf",
    type: "opcode",
  },
  planet: {
    synopsis: [
      "ax, ay, az planet kmass1, kmass2, ksep, ix, iy, iz, ivx, ivy, ivz, idelta [, ifriction] [, iskip]",
    ],
    id: "planet",
    type: "opcode",
  },
  platerev: {
    synopsis: [
      "a1[, a2, ...] platerev itabexcite. itabouts, kbndry, iaspect, istiff, idecay, iloss, aexcite1[, aexcite2, ...]",
    ],
    id: "platerev",
    type: "opcode",
  },
  plltrack: {
    synopsis: [
      "acps, alock plltrack asig, kd [, kloopf, kloopq, klf, khf, kthresh]",
    ],
    id: "plltrack",
    type: "opcode",
  },
  pluck: {
    synopsis: ["ares pluck kamp, kcps, icps, ifn, imeth [, iparm1] [, iparm2]"],
    id: "pluck",
    type: "opcode",
  },
  "+=": {
    synopsis: [
      "ares += xarg",
      "ires += iarg",
      "kres += karg",
      "table [ kval] += karg",
    ],
    id: "plusbecomes",
    type: "opcode",
  },
  poisson: {
    synopsis: [
      "ares poisson klambda",
      "ires poisson klambda",
      "kres poisson klambda",
    ],
    id: "poisson",
    type: "opcode",
  },
  pol2rect: {
    synopsis: ["kout[] pol2rect kin[]", "kout[] pol2rect kmags[], kphs[]"],
    id: "pol2rect",
    type: "opcode",
  },
  polyaft: {
    synopsis: [
      "ires polyaft inote [, ilow] [, ihigh]",
      "kres polyaft inote [, ilow] [, ihigh]",
    ],
    id: "polyaft",
    type: "opcode",
  },
  polynomial: {
    synopsis: ["aout polynomial ain, k0 [, k1 [, k2 [...]]]"],
    id: "polynomial",
    type: "opcode",
  },
  pop: {
    synopsis: [
      "xval1, [xval2, ... , xval31] pop",
      "ival1, [ival2, ... , ival31] pop",
    ],
    id: "pop",
    type: "opcode",
  },
  pop_f: {synopsis: ["fsig pop_f"], id: "pop_f", type: "opcode"},
  port: {
    synopsis: ["kres port ksig, ihtim [, isig]"],
    id: "port",
    type: "opcode",
  },
  portk: {
    synopsis: ["kres portk ksig, khtim [, isig]"],
    id: "portk",
    type: "opcode",
  },
  poscil: {
    synopsis: [
      "ares poscil aamp, acps [, ifn, iphs]",
      "ares poscil aamp, kcps [, ifn, iphs]",
      "ares poscil kamp, acps [, ifn, iphs]",
      "ares poscil kamp, kcps [, ifn, iphs]",
      "ires poscil kamp, kcps [, ifn, iphs]",
      "kres poscil kamp, kcps [, ifn, iphs]",
    ],
    id: "poscil",
    type: "opcode",
  },
  poscil3: {
    synopsis: [
      "ares poscil3 aamp, acps [, ifn, iphs]",
      "ares poscil3 aamp, kcps [, ifn, iphs]",
      "ares poscil3 kamp, acps [, ifn, iphs]",
      "ares poscil3 kamp, kcps [, ifn, iphs]",
      "ires poscil3 kamp, kcps [, ifn, iphs]",
      "kres poscil3 kamp, kcps [, ifn, iphs]",
    ],
    id: "poscil3",
    type: "opcode",
  },
  pow: {
    synopsis: [
      "ares pow aarg, kpow [, inorm]",
      "ires pow iarg, ipow [, inorm]",
      "kres pow karg, kpow [, inorm]",
      "ires[] pow iarg[], ipow[] ",
      "kres[] pow karg[], kpow[]",
      "ires[] pow iarg[], ipow ",
      "kres[] pow karg[], kpow ",
    ],
    id: "pow",
    type: "opcode",
  },
  powershape: {
    synopsis: ["aout powershape ain, kShapeAmount [, ifullscale]"],
    id: "powershape",
    type: "opcode",
  },
  powoftwo: {
    synopsis: ["powoftwo(x) (init-rate or control-rate args only)"],
    id: "powoftwo",
    type: "opcode",
  },
  prealloc: {
    synopsis: ["prealloc insnum, icount", 'prealloc "insname", icount'],
    id: "prealloc",
    type: "opcode",
  },
  prepiano: {
    synopsis: [
      "ares prepiano ifreq, iNS, iD, iK, iT30,iB, kbcl, kbcr, imass, ihvfreq, iinit, ipos, ivel, isfreq, isspread[, irattles, irubbers]",
      "al,ar prepiano ifreq, iNS, iD, iK, iT30,iB, kbcl, kbcr, imass, ihvfreq, iinit, ipos, ivel, isfreq, isspread[, irattles, irubbers]",
    ],
    id: "prepiano",
    type: "opcode",
  },
  print: {
    synopsis: ["print iarg [, iarg1] [, iarg2] [...]"],
    id: "print",
    type: "opcode",
  },
  printarray: {
    synopsis: [
      "printarray ixs[] [, Smft, Slabel ]",
      "printarray kxs[] [, ktrig, Sfmt, Slabel ]",
    ],
    id: "printarray",
    type: "opcode",
  },
  printf: {
    synopsis: [
      "printf_i Sfmt, itrig, [iarg1[, iarg2[, ... ]]]",
      "printf Sfmt, ktrig, [xarg1[, xarg2[, ... ]]]",
    ],
    id: "printf",
    type: "opcode",
  },
  printk: {
    synopsis: ["printk itime, kval [, ispace] [, inamed]"],
    id: "printk",
    type: "opcode",
  },
  printk2: {
    synopsis: ["printk2 kvar [, inumspaces] [, inamed]"],
    id: "printk2",
    type: "opcode",
  },
  printks: {
    synopsis: ['printks "string", itime [, xval1] [, xval2] [...]'],
    id: "printks",
    type: "opcode",
  },
  printks2: {
    synopsis: ['printks2 "string", kval'],
    id: "printks2",
    type: "opcode",
  },
  println: {
    synopsis: ['println "string", [, xval1] [, xval2] [...]'],
    id: "println",
    type: "opcode",
  },
  prints: {
    synopsis: ['prints "string" [, xval1] [, xval2] [...]'],
    id: "prints",
    type: "opcode",
  },
  printsk: {
    synopsis: ['printsk "string", [, xval1] [, xval2] [...]'],
    id: "printsk",
    type: "opcode",
  },
  product: {
    synopsis: ["kres/iresproduct karr[]/iarr[] (k- or i-arrays )"],
    id: "productarray",
    type: "opcode",
  },
  pset: {
    synopsis: ["pset icon1 [, icon2] [...]"],
    id: "pset",
    type: "opcode",
  },
  ptable: {
    synopsis: [
      "ares ptable andx, ifn [, ixmode] [, ixoff] [, iwrap]",
      "ires ptable indx, ifn [, ixmode] [, ixoff] [, iwrap]",
      "kres ptable kndx, ifn [, ixmode] [, ixoff] [, iwrap]",
    ],
    id: "ptable",
    type: "opcode",
  },
  ptable3: {
    synopsis: [
      "ares ptable3 andx, ifn [, ixmode] [, ixoff] [, iwrap]",
      "ires ptable3 indx, ifn [, ixmode] [, ixoff] [, iwrap]",
      "kres ptable3 kndx, ifn [, ixmode] [, ixoff] [, iwrap]",
    ],
    id: "ptable3",
    type: "opcode",
  },
  ptablei: {
    synopsis: [
      "ares ptablei andx, ifn [, ixmode] [, ixoff] [, iwrap]",
      "ires ptablei indx, ifn [, ixmode] [, ixoff] [, iwrap]",
      "kres ptablei kndx, ifn [, ixmode] [, ixoff] [, iwrap]",
    ],
    id: "ptablei",
    type: "opcode",
  },
  ptablew: {
    synopsis: [
      "ptablew asig, andx, ifn [, ixmode] [, ixoff] [, iwgmode]",
      "ptablew isig, indx, ifn [, ixmode] [, ixoff] [, iwgmode]",
      "ptablew ksig, kndx, ifn [, ixmode] [, ixoff] [, iwgmode]",
    ],
    id: "ptablew",
    type: "opcode",
  },
  ptrack: {
    synopsis: ["kcps, kamp ptrack asig, ihopsize[,ipeaks]"],
    id: "ptrack",
    type: "opcode",
  },
  push: {
    synopsis: [
      "push xval1, [xval2, ... , xval31]",
      "push ival1, [ival2, ... , ival31]",
    ],
    id: "push",
    type: "opcode",
  },
  push_f: {synopsis: ["push_f fsig"], id: "push_f", type: "opcode"},
  puts: {
    synopsis: ["puts Sstr, ktrig[, inonl]"],
    id: "puts",
    type: "opcode",
  },
  pvadd: {
    synopsis: [
      "ares pvadd ktimpnt, kfmod, ifilcod, ifn, ibins [, ibinoffset] [, ibinincr] [, iextractmode] [, ifreqlim] [, igatefn]",
    ],
    id: "pvadd",
    type: "opcode",
  },
  pvbufread: {
    synopsis: ["pvbufread ktimpnt, ifile"],
    id: "pvbufread",
    type: "opcode",
  },
  pvcross: {
    synopsis: [
      "ares pvcross ktimpnt, kfmod, ifile, kampscale1, kampscale2 [, ispecwp]",
    ],
    id: "pvcross",
    type: "opcode",
  },
  pvinterp: {
    synopsis: [
      "ares pvinterp ktimpnt, kfmod, ifile, kfreqscale1, kfreqscale2, kampscale1, kampscale2, kfreqinterp, kampinterp",
    ],
    id: "pvinterp",
    type: "opcode",
  },
  pvoc: {
    synopsis: [
      "ares pvoc ktimpnt, kfmod, ifilcod [, ispecwp] [, iextractmode] [, ifreqlim] [, igatefn]",
    ],
    id: "pvoc",
    type: "opcode",
  },
  pvread: {
    synopsis: ["kfreq, kamp pvread ktimpnt, ifile, ibin"],
    id: "pvread",
    type: "opcode",
  },
  pvs2tab: {
    synopsis: [
      "kframe pvs2tab tvar|kvar[], fsig",
      "kframe pvs2tab kmags[], kfreqs[], fsig",
    ],
    id: "pvs2tab",
    type: "opcode",
  },
  pvsadsyn: {
    synopsis: [
      "ares pvsadsyn fsrc, inoscs, kfmod [, ibinoffset] [, ibinincr] [, iinit]",
    ],
    id: "pvsadsyn",
    type: "opcode",
  },
  pvsanal: {
    synopsis: [
      "fsig pvsanal ain, ifftsize, ioverlap, iwinsize, iwintype [, iformat] [, iinit]",
    ],
    id: "pvsanal",
    type: "opcode",
  },
  pvsarp: {
    synopsis: ["fsig pvsarp fsigin, kbin, kdepth, kgain"],
    id: "pvsarp",
    type: "opcode",
  },
  pvsbandp: {
    synopsis: [
      "fsig pvsbandp fsigin, xlowcut, xlowfull, xhighfull, xhighcut[, ktype]",
    ],
    id: "pvsbandp",
    type: "opcode",
  },
  pvsbandr: {
    synopsis: [
      "fsig pvsbandr fsigin, xlowcut, xlowfull, xhighfull, xhighcut[, ktype]",
    ],
    id: "pvsbandr",
    type: "opcode",
  },
  pvsbandwidth: {
    synopsis: ["kbnd pvsbandwidth fsig"],
    id: "pvsbandwidth",
    type: "opcode",
  },
  pvsbin: {
    synopsis: ["kamp, kfr pvsbin fsig, kbin"],
    id: "pvsbin",
    type: "opcode",
  },
  pvsblur: {
    synopsis: ["fsig pvsblur fsigin, kblurtime, imaxdel"],
    id: "pvsblur",
    type: "opcode",
  },
  pvsbuffer: {
    synopsis: ["ihandle, ktime pvsbuffer fsig, ilen "],
    id: "pvsbuffer",
    type: "opcode",
  },
  pvsbufread: {
    synopsis: ["fsig pvsbufread ktime, khandle[, ilo, ihi, iclear] "],
    id: "pvsbufread",
    type: "opcode",
  },
  pvsbufread2: {
    synopsis: ["fsig pvsbufread2 ktime, khandle, ift1, ift2 "],
    id: "pvsbufread2",
    type: "opcode",
  },
  pvscale: {
    synopsis: ["fsig pvscale fsigin, kscal[, kkeepform, kgain, kcoefs]"],
    id: "pvscale",
    type: "opcode",
  },
  pvscent: {
    synopsis: ["kcent pvscent fsig", "acent pvscent fsig"],
    id: "pvscent",
    type: "opcode",
  },
  pvsceps: {
    synopsis: ["keps[] pvsceps fsig[, icoefs]"],
    id: "pvsceps",
    type: "opcode",
  },
  pvscfs: {
    synopsis: ["kCoef[],krms,kerr pvscfs fsig, iord[,imod]"],
    id: "pvscfs",
    type: "opcode",
  },
  pvscross: {
    synopsis: ["fsig pvscross fsrc, fdest, kamp1, kamp2"],
    id: "pvscross",
    type: "opcode",
  },
  pvsdemix: {
    synopsis: ["fsig pvsdemix fleft, fright, kpos, kwidth, ipoints"],
    id: "pvsdemix",
    type: "opcode",
  },
  pvsdiskin: {
    synopsis: ["fsig pvsdiskin SFname,ktscal,kgain[,ioffset, ichan]"],
    id: "pvsdiskin",
    type: "opcode",
  },
  pvsdisp: {
    synopsis: ["pvsdisp fsig[, ibins, iwtflg] "],
    id: "pvsdisp",
    type: "opcode",
  },
  pvsfilter: {
    synopsis: ["fsig pvsfilter fsigin, fsigfil, kdepth[, igain]"],
    id: "pvsfilter",
    type: "opcode",
  },
  pvsfread: {
    synopsis: ["fsig pvsfread ktimpt, ifn [, ichan]"],
    id: "pvsfread",
    type: "opcode",
  },
  pvsfreeze: {
    synopsis: ["fsig pvsfreeze fsigin, kfreeza, kfreezf"],
    id: "pvsfreeze",
    type: "opcode",
  },
  pvsftr: {
    synopsis: ["pvsftr fsrc, ifna [, ifnf]"],
    id: "pvsftr",
    type: "opcode",
  },
  pvsftw: {
    synopsis: ["kflag pvsftw fsrc, ifna [, ifnf]"],
    id: "pvsftw",
    type: "opcode",
  },
  pvsfwrite: {
    synopsis: ["pvsfwrite fsig, ifile"],
    id: "pvsfwrite",
    type: "opcode",
  },
  pvsgain: {
    synopsis: ["fsig pvsgain fsigin, kgain "],
    id: "pvsgain",
    type: "opcode",
  },
  pvshift: {
    synopsis: [
      "fsig pvshift fsigin, kshift, klowest[, kkeepform, igain, kcoefs]",
    ],
    id: "pvshift",
    type: "opcode",
  },
  pvsifd: {
    synopsis: ["ffr,fphs pvsifd ain, ifftsize, ihopsize, iwintype[,iscal]"],
    id: "pvsifd",
    type: "opcode",
  },
  pvsin: {
    synopsis: ["fsig pvsin kchan[, isize, iolap, iwinsize, iwintype, iformat]"],
    id: "pvsin",
    type: "opcode",
  },
  pvsinfo: {
    synopsis: ["ioverlap, inumbins, iwinsize, iformat pvsinfo fsrc"],
    id: "pvsinfo",
    type: "opcode",
  },
  pvsinit: {
    synopsis: ["fsig pvsinit isize[, iolap, iwinsize, iwintype, iformat]"],
    id: "pvsinit",
    type: "opcode",
  },
  pvslock: {
    synopsis: ["fsig pvslock fsigin, klock"],
    id: "pvslock",
    type: "opcode",
  },
  pvslpc: {
    synopsis: ["fsig pvslpc asrc, idftsiz, ihop, iord[,iwin] "],
    id: "pvslpc",
    type: "opcode",
  },
  pvsmaska: {
    synopsis: ["fsig pvsmaska fsrc, ifn, kdepth"],
    id: "pvsmaska",
    type: "opcode",
  },
  pvsmix: {
    synopsis: ["fsig pvsmix fsigin1, fsigin2"],
    id: "pvsmix",
    type: "opcode",
  },
  pvsmooth: {
    synopsis: ["fsig pvsmooth fsigin, kacf, kfcf"],
    id: "pvsmooth",
    type: "opcode",
  },
  pvsmorph: {
    synopsis: ["fsig pvsmorph fsig1, fsig2, kampint, kfrqint"],
    id: "pvsmorph",
    type: "opcode",
  },
  pvsosc: {
    synopsis: [
      "fsig pvsosc kamp, kfreq, ktype, isize [,ioverlap] [, iwinsize] [, iwintype] [, iformat]",
    ],
    id: "pvsosc",
    type: "opcode",
  },
  pvsout: {synopsis: ["pvsout fsig, kchan"], id: "pvsout", type: "opcode"},
  pvspitch: {
    synopsis: ["kfr, kamp pvspitch fsig, kthresh"],
    id: "pvspitch",
    type: "opcode",
  },
  pvstanal: {
    synopsis: [
      "fsig pvstanal ktimescal, kamp, kpitch, ktab, [kdetect, kwrap, ioffset,ifftsize, ihop, idbthresh] ",
    ],
    id: "pvstanal",
    type: "opcode",
  },
  pvstencil: {
    synopsis: ["fsig pvstencil fsigin, kgain, klevel, iftable"],
    id: "pvstencil",
    type: "opcode",
  },
  pvstrace: {
    synopsis: [
      "fsig pvstrace fsigin, kn ",
      "fsig, kBins[] pvstrace fsigin, kn[, isort, imin, imax] ",
    ],
    id: "pvstrace",
    type: "opcode",
  },
  pvsvoc: {
    synopsis: ["fsig pvsvoc famp, fexc, kdepth, kgain [,kcoefs]"],
    id: "pvsvoc",
    type: "opcode",
  },
  pvswarp: {
    synopsis: [
      "fsig pvswarp fsigin, kscal, kshift[, klowest, kmeth, kgain, kcoefs]",
    ],
    id: "pvswarp",
    type: "opcode",
  },
  pvsynth: {
    synopsis: ["ares pvsynth fsrc, [iinit]"],
    id: "pvsynth",
    type: "opcode",
  },
  pwd: {synopsis: ["Sres pwd"], id: "pwd", type: "opcode"},
  pyassign: {
    synopsis: [
      'pyassign "variable", kvalue',
      'pyassigni "variable", ivalue',
      'pylassign "variable", kvalue',
      'pylassigni "variable", ivalue',
      'pyassignt ktrigger, "variable", kvalue',
      'pylassignt ktrigger, "variable", kvalue',
    ],
    id: "pyassign",
    type: "opcode",
  },
  pycall: {
    synopsis: [
      ' pycall "callable", karg1, ...',
      'kresult pycall1 "callable", karg1, ...',
      'kresult1, kresult2 pycall2 "callable", karg1, ...',
      'kr1, kr2, kr3 pycall3 "callable", karg1, ...',
      'kr1, kr2, kr3, kr4 pycall4 "callable", karg1, ...',
      'kr1, kr2, kr3, kr4, kr5 pycall5 "callable", karg1, ...',
      'kr1, kr2, kr3, kr4, kr5, kr6 pycall6 "callable", karg1, ...',
      'kr1, kr2, kr3, kr4, kr5, kr6, kr7 pycall7 "callable", karg1, ...',
      'kr1, kr2, kr3, kr4, kr5, kr6, kr7, kr8 pycall8 "callable", karg1, ...',
      ' pycallt ktrigger, "callable", karg1, ...',
      'kresult pycall1t ktrigger, "callable", karg1, ...',
      'kresult1, kresult2 pycall2t ktrigger, "callable", karg1, ...',
      'kr1, kr2, kr3 pycall3t ktrigger, "callable", karg1, ...',
      'kr1, kr2, kr3, kr4 pycall4t ktrigger, "callable", karg1, ...',
      'kr1, kr2, kr3, kr4, kr5 pycall5t ktrigger, "callable", karg1, ...',
      'kr1, kr2, kr3, kr4, kr5, kr6 pycall6t ktrigger, "callable", karg1, ...',
      'kr1, kr2, kr3, kr4, kr5, kr6, kr7 pycall7t ktrigger, "callable", karg1, ...',
      'kr1, kr2, kr3, kr4, kr5, kr6, kr7, kr8 pycall8t ktrigger, "callable", karg1, ...',
      ' pycalli "callable", karg1, ...',
      'iresult pycall1i "callable", iarg1, ...',
      'iresult1, iresult2 pycall2i "callable", iarg1, ...',
      'ir1, ir2, ir3 pycall3i "callable", iarg1, ...',
      'ir1, ir2, ir3, ir4 pycall4i "callable", iarg1, ...',
      'ir1, ir2, ir3, ir4, ir5 pycall5i "callable", iarg1, ...',
      'ir1, ir2, ir3, ir4, ir5, ir6 pycall6i "callable", iarg1, ...',
      'ir1, ir2, ir3, ir4, ir5, ir6, ir7 pycall7i "callable", iarg1, ...',
      'ir1, ir2, ir3, ir4, ir5, ir6, ir7, ir8 pycall8i "callable", iarg1, ...',
      'pycalln "callable", nresults, kresult1, ..., kresultn, karg1, ...',
      'pycallni "callable", nresults, iresult1, ..., iresultn, iarg1, ...',
      ' pylcall "callable", karg1, ...',
      'kresult pylcall1 "callable", karg1, ...',
      'kresult1, kresult2 pylcall2 "callable", karg1, ...',
      'kr1, kr2, kr3 pylcall3 "callable", karg1, ...',
      'kr1, kr2, kr3, kr4 pylcall4 "callable", karg1, ...',
      'kr1, kr2, kr3, kr4, kr5 pylcall5 "callable", karg1, ...',
      'kr1, kr2, kr3, kr4, kr5, kr6 pylcall6 "callable", karg1, ...',
      'kr1, kr2, kr3, kr4, kr5, kr6, kr7 pylcall7 "callable", karg1, ...',
      'kr1, kr2, kr3, kr4, kr5, kr6, kr7, kr8 pylcall8 "callable", karg1, ...',
      ' pylcallt ktrigger, "callable", karg1, ...',
      'kresult pylcall1t ktrigger, "callable", karg1, ...',
      'kresult1, kresult2 pylcall2t ktrigger, "callable", karg1, ...',
      'kr1, kr2, kr3 pylcall3t ktrigger, "callable", karg1, ...',
      'kr1, kr2, kr3, kr4 pylcall4t ktrigger, "callable", karg1, ...',
      'kr1, kr2, kr3, kr4, kr5 pylcall5t ktrigger, "callable", karg1, ...',
      'kr1, kr2, kr3, kr4, kr5, kr6 pylcall6t ktrigger, "callable", karg1, ...',
      'kr1, kr2, kr3, kr4, kr5, kr6, kr7 pylcall7t ktrigger, "callable", karg1, ...',
      'kr1, kr2, kr3, kr4, kr5, kr6, kr7, kr8 pylcall8t ktrigger, "callable", karg1, ...',
      ' pylcalli "callable", karg1, ...',
      'iresult pylcall1i "callable", iarg1, ...',
      'iresult1, iresult2 pylcall2i "callable", iarg1, ...',
      'ir1, ir2, ir3 pylcall3i "callable", iarg1, ...',
      'ir1, ir2, ir3, ir4 pylcall4i "callable", iarg1, ...',
      'ir1, ir2, ir3, ir4, ir5 pylcall5i "callable", iarg1, ...',
      'ir1, ir2, ir3, ir4, ir5, ir6 pylcall6i "callable", iarg1, ...',
      'ir1, ir2, ir3, ir4, ir5, ir6, ir7 pylcall7i "callable", iarg1, ...',
      'ir1, ir2, ir3, ir4, ir5, ir6, ir7, ir8 pylcall8i "callable", iarg1, ...',
      'pylcalln "callable", nresults, kresult1, ..., kresultn, karg1, ...',
      'pylcallni "callable", nresults, iresult1, ..., iresultn, iarg1, ...',
    ],
    id: "pycall",
    type: "opcode",
  },
  pyeval: {
    synopsis: [
      'kresult pyeval "expression"',
      'iresult pyevali "expression"',
      'kresult pyleval "expression"',
      'iresult pylevali "expression"',
      'kresult pyevalt ktrigger, "expression"',
      'kresult pylevalt ktrigger, "expression"',
    ],
    id: "pyeval",
    type: "opcode",
  },
  pyexec: {
    synopsis: [
      'pyexec "filename"',
      'pyexeci "filename"',
      'pylexec "filename"',
      'pylexeci "filename"',
      'pyexect ktrigger, "filename"',
      'plyexect ktrigger, "filename"',
    ],
    id: "pyexec",
    type: "opcode",
  },
  pyinit: {synopsis: ["pyinit"], id: "pyinit", type: "opcode"},
  pyrun: {
    synopsis: [
      'pyrun "statement"',
      'pyruni "statement"',
      'pylrun "statement"',
      'pylruni "statement"',
      'pyrunt ktrigger, "statement"',
      'pylrunt ktrigger, "statement"',
    ],
    id: "pyrun",
    type: "opcode",
  },
  qinf: {
    synopsis: ["qinf(x) (no rate restriction)"],
    id: "qinf",
    type: "opcode",
  },
  qnan: {
    synopsis: ["qnan(x) (no rate restriction)"],
    id: "qnan",
    type: "opcode",
  },
  r2c: {synopsis: ["kout[] r2c kin[]"], id: "r2c", type: "opcode"},
  "^": {
    synopsis: ["a ^ b (b not audio-rate)"],
    id: "raises",
    type: "opcode",
  },
  rand: {
    synopsis: [
      "ares rand xamp [, iseed] [, isel] [, ioffset]",
      "kres rand xamp [, iseed] [, isel] [, ioffset]",
    ],
    id: "rand",
    type: "opcode",
  },
  randh: {
    synopsis: [
      "ares randh xamp, xcps [, iseed] [, isize] [, ioffset]",
      "kres randh kamp, kcps [, iseed] [, isize] [, ioffset]",
    ],
    id: "randh",
    type: "opcode",
  },
  randi: {
    synopsis: [
      "ares randi xamp, xcps [, iseed] [, isize] [, ioffset]",
      "kres randi kamp, kcps [, iseed] [, isize] [, ioffset]",
    ],
    id: "randi",
    type: "opcode",
  },
  random: {
    synopsis: [
      "ares random kmin, kmax",
      "ires random imin, imax",
      "kres random kmin, kmax",
    ],
    id: "random",
    type: "opcode",
  },
  randomh: {
    synopsis: [
      "ares randomh kmin, kmax, xcps [,imode] [,ifirstval]",
      "kres randomh kmin, kmax, kcps [,imode] [,ifirstval]",
    ],
    id: "randomh",
    type: "opcode",
  },
  randomi: {
    synopsis: [
      "ares randomi kmin, kmax, xcps [,imode] [,ifirstval]",
      "kres randomi kmin, kmax, kcps [,imode] [,ifirstval]",
    ],
    id: "randomi",
    type: "opcode",
  },
  rbjeq: {
    synopsis: ["ar rbjeq asig, kfco, klvl, kQ, kS[, imode]"],
    id: "rbjeq",
    type: "opcode",
  },
  readclock: {
    synopsis: ["ir readclock inum"],
    id: "readclock",
    type: "opcode",
  },
  readf: {
    synopsis: ["Sres, kline readf ifilname"],
    id: "readf",
    type: "opcode",
  },
  readfi: {
    synopsis: ["Sres, iline readfi ifilname"],
    id: "readfi",
    type: "opcode",
  },
  readk: {
    synopsis: ["kres readk ifilname, iformat, iprd"],
    id: "readk",
    type: "opcode",
  },
  readk2: {
    synopsis: ["kr1, kr2 readk2 ifilname, iformat, iprd"],
    id: "readk2",
    type: "opcode",
  },
  readk3: {
    synopsis: ["kr1, kr2, kr3 readk3 ifilname, iformat, iprd"],
    id: "readk3",
    type: "opcode",
  },
  readk4: {
    synopsis: ["kr1, kr2, kr3, kr4 readk4 ifilname, iformat, iprd"],
    id: "readk4",
    type: "opcode",
  },
  readscore: {synopsis: ["readscore Sin "], id: "readscore", type: "opcode"},
  readscratch: {
    synopsis: ["ival readscratch[index]"],
    id: "readscratch",
    type: "opcode",
  },
  rect2pol: {
    synopsis: ["kout[] rect2pol kin[]"],
    id: "rect2pol",
    type: "opcode",
  },
  reinit: {synopsis: ["reinit label"], id: "reinit", type: "opcode"},
  release: {synopsis: ["kflag release"], id: "release", type: "opcode"},
  remoteport: {
    synopsis: ["remoteport iportnum"],
    id: "remoteport",
    type: "opcode",
  },
  remove: {synopsis: ["remove insnum"], id: "remove", type: "opcode"},
  repluck: {
    synopsis: ["ares repluck iplk, kamp, icps, kpick, krefl, axcite"],
    id: "repluck",
    type: "opcode",
  },
  reshapearray: {
    synopsis: ["reshapearray array[], isize0 [, isize1 ]"],
    id: "reshapearray",
    type: "opcode",
  },
  reson: {
    synopsis: ["ares reson asig, xcf, xbw [, iscl] [, iskip]"],
    id: "reson",
    type: "opcode",
  },
  resonbnk: {
    synopsis: ["asigresonbnk ain, kPar[],kmin,kmax,iper[,imode,iscal,iskip] "],
    id: "resonbnk",
    type: "opcode",
  },
  resonk: {
    synopsis: ["kres resonk ksig, kcf, kbw [, iscl] [, iskip]"],
    id: "resonk",
    type: "opcode",
  },
  resonr: {
    synopsis: ["ares resonr asig, xcf, xbw [, iscl] [, iskip]"],
    id: "resonr",
    type: "opcode",
  },
  resonx: {
    synopsis: ["ares resonx asig, xcf, xbw [, inumlayer] [, iscl] [, iskip]"],
    id: "resonx",
    type: "opcode",
  },
  resonxk: {
    synopsis: ["kres resonxk ksig, kcf, kbw[, inumlayer, iscl, istor]"],
    id: "resonxk",
    type: "opcode",
  },
  resony: {
    synopsis: [
      "ares resony asig, kbf, kbw, inum, ksep [, isepmode] [, iscl] [, iskip]",
    ],
    id: "resony",
    type: "opcode",
  },
  resonz: {
    synopsis: ["ares resonz asig, xcf, xbw [, iscl] [, iskip]"],
    id: "resonz",
    type: "opcode",
  },
  resyn: {
    synopsis: ["asig resyn fin, kscal, kpitch, kmaxtracks, ifn"],
    id: "resyn",
    type: "opcode",
  },
  return: {synopsis: ["return ival "], id: "return", type: "opcode"},
  reverb: {
    synopsis: ["ares reverb asig, krvt [, iskip]"],
    id: "reverb",
    type: "opcode",
  },
  reverb2: {
    synopsis: [
      "ares reverb2 asig, ktime, khdif [, iskip] [,inumCombs] [, ifnCombs] [, inumAlpas] [, ifnAlpas]",
    ],
    id: "reverb2",
    type: "opcode",
  },
  reverbsc: {
    synopsis: [
      "aoutL, aoutR reverbsc ainL, ainR, kfblvl, kfco[, israte[, ipitchm[, iskip]]] ",
    ],
    id: "reverbsc",
    type: "opcode",
  },
  rewindscore: {synopsis: [" rewindscore"], id: "rewindscore", type: "opcode"},
  rezzy: {
    synopsis: ["ares rezzy asig, xfco, xres [, imode, iskip]"],
    id: "rezzy",
    type: "opcode",
  },
  rfft: {synopsis: ["kout[] rfft kin[]"], id: "rfft", type: "opcode"},
  rifft: {synopsis: ["kout[] rifft kin[]"], id: "rifft", type: "opcode"},
  rigoto: {synopsis: ["rigoto label"], id: "rigoto", type: "opcode"},
  rireturn: {synopsis: ["rireturn"], id: "rireturn", type: "opcode"},
  rms: {
    synopsis: ["kres rms asig [, ihp] [, iskip]"],
    id: "rms",
    type: "opcode",
  },
  rnd: {
    synopsis: ["rnd(x) (init- or control-rate only)"],
    id: "rnd",
    type: "opcode",
  },
  rnd31: {
    synopsis: [
      "ax rnd31 kscl, krpow [, iseed]",
      "ix rnd31 iscl, irpow [, iseed]",
      "kx rnd31 kscl, krpow [, iseed]",
    ],
    id: "rnd31",
    type: "opcode",
  },
  rndseed: {synopsis: ["rndseed ival"], id: "rndseed", type: "opcode"},
  round: {
    synopsis: [
      "round(x) (init-, control-, or audio-rate arg allowed)",
      "round(k/i[]) (k- or i-arrays )",
    ],
    id: "round",
    type: "opcode",
  },
  rspline: {
    synopsis: [
      "ares rspline xrangeMin, xrangeMax, kcpsMin, kcpsMax",
      "kres rspline krangeMin, krangeMax, kcpsMin, kcpsMax",
    ],
    id: "rspline",
    type: "opcode",
  },
  rtclock: {
    synopsis: ["ires rtclock", "kres rtclock"],
    id: "rtclock",
    type: "opcode",
  },
  s16b14: {
    synopsis: [
      "i1,...,i16 s16b14 ichan, ictlno_msb1, ictlno_lsb1, imin1, imax1, initvalue1, ifn1,..., ictlno_msb16, ictlno_lsb16, imin16, imax16, initvalue16, ifn16",
      "k1,...,k16 s16b14 ichan, ictlno_msb1, ictlno_lsb1, imin1, imax1, initvalue1, ifn1,..., ictlno_msb16, ictlno_lsb16, imin16, imax16, initvalue16, ifn16",
    ],
    id: "s16b14",
    type: "opcode",
  },
  s32b14: {
    synopsis: [
      "i1,...,i32 s32b14 ichan, ictlno_msb1, ictlno_lsb1, imin1, imax1, initvalue1, ifn1,..., ictlno_msb32, ictlno_lsb32, imin32, imax32, initvalue32, ifn32",
      "k1,...,k32 s32b14 ichan, ictlno_msb1, ictlno_lsb1, imin1, imax1, initvalue1, ifn1,..., ictlno_msb32, ictlno_lsb32, imin32, imax32, initvalue32, ifn32",
    ],
    id: "s32b14",
    type: "opcode",
  },
  samphold: {
    synopsis: [
      "ares samphold asig, agate [, ival] [, ivstor]",
      "kres samphold ksig, kgate [, ival] [, ivstor]",
    ],
    id: "samphold",
    type: "opcode",
  },
  sandpaper: {
    synopsis: [
      "ares sandpaper iamp, idettack [, inum] [, idamp] [, imaxshake]",
    ],
    id: "sandpaper",
    type: "opcode",
  },
  sc_lag: {
    synopsis: [
      "aout sc_lag ain, klagtime [, initialvalue]",
      "kout sc_lag kin, klagtime [, initialvalue]",
    ],
    id: "sc_lag",
    type: "opcode",
  },
  sc_lagud: {
    synopsis: [
      "aout sc_lagud ain, klagup, klagdown [, initialvalue]",
      "kout sc_lagud kin, klagup, klagdown [, initialvalue]",
    ],
    id: "sc_lagud",
    type: "opcode",
  },
  sc_phasor: {
    synopsis: [
      "aindex sc_phasor xtrig, xrate, kstart, kend [, kresetPos] ",
      "kindex sc_phasor xtrig, xrate, kstart, kend [, kresetPos] ",
    ],
    id: "sc_phasor",
    type: "opcode",
  },
  sc_trig: {
    synopsis: ["aout sc_trig ain, kdur", "kout sc_trig kin, kdur"],
    id: "sc_trig",
    type: "opcode",
  },
  scale: {
    synopsis: ["kscl scale kinput, kmax, kmin[, kimax, kimin]"],
    id: "scale",
    type: "opcode",
  },
  scalearray: {
    synopsis: ["scalearray tarray, kmin, kmax[, kleft, kright]"],
    id: "scalearray",
    type: "opcode",
  },
  scanhammer: {
    synopsis: ["scanhammer isrc, idst, ipos, imult"],
    id: "scanhammer",
    type: "opcode",
  },
  scans: {
    synopsis: ["ares scans kamp, kfreq, ifn, id [, iorder]"],
    id: "scans",
    type: "opcode",
  },
  scantable: {
    synopsis: ["aout scantable kamp, kpch, ipos, imass, istiff, idamp, ivel"],
    id: "scantable",
    type: "opcode",
  },
  scanu: {
    synopsis: [
      "scanu init, irate, ifnvel, ifnmass, ifnstif, ifncentr, ifndamp, kmass, kstif, kcentr, kdamp, ileft, iright, kpos, kstrngth, ain, idisp, id",
    ],
    id: "scanu",
    type: "opcode",
  },
  schedkwhen: {
    synopsis: [
      "schedkwhen ktrigger, kmintim, kmaxnum, kinsnum, kwhen, kdur [, ip4] [, ip5] [...]",
      'schedkwhen ktrigger, kmintim, kmaxnum, "insname", kwhen, kdur [, ip4] [, ip5] [...]',
    ],
    id: "schedkwhen",
    type: "opcode",
  },
  schedkwhennamed: {
    synopsis: [
      'schedkwhennamed ktrigger, kmintim, kmaxnum, "name", kwhen, kdur [, ip4] [, ip5] [...]',
    ],
    id: "schedkwhennamed",
    type: "opcode",
  },
  schedule: {
    synopsis: [
      "schedule insnum, iwhen, idur [, ip4] [, ip5] [...]",
      'schedule "insname", iwhen, idur [, ip4] [, ip5] [...]',
      "schedule iPar[]",
    ],
    id: "schedule",
    type: "opcode",
  },
  schedulek: {
    synopsis: [
      "schedulek knsnum, kwhen, kdur [, kp4] [, kp5] [...]",
      'schedulek "insname", kwhen, kdur [, kp4] [, kp5] [...]',
      "schedule kPar[]",
    ],
    id: "schedulek",
    type: "opcode",
  },
  schedwhen: {
    synopsis: [
      "schedwhen ktrigger, kinsnum, kwhen, kdur [, ip4] [, ip5] [...]",
      'schedwhen ktrigger, "insname", kwhen, kdur [, ip4] [, ip5] [...]',
    ],
    id: "schedwhen",
    type: "opcode",
  },
  scoreline: {
    synopsis: ["scoreline Sin, ktrig"],
    id: "scoreline",
    type: "opcode",
  },
  scoreline_i: {
    synopsis: ["scoreline_i Sin"],
    id: "scoreline_i",
    type: "opcode",
  },
  sekere: {
    synopsis: ["ares sekere iamp, idettack [, inum] [, idamp] [, imaxshake]"],
    id: "sekere",
    type: "opcode",
  },
  select: {
    synopsis: ["aout select a1, a2, aless, aequal, amore"],
    id: "select",
    type: "opcode",
  },
  semitone: {synopsis: ["semitone(x)"], id: "semitone", type: "opcode"},
  sense: {synopsis: [], id: "sense", type: "opcode"},
  sensekey: {
    synopsis: ["kres[, kkeydown] sensekey"],
    id: "sensekey",
    type: "opcode",
  },
  seqtime: {
    synopsis: [
      "ktrig_out seqtime ktime_unit, kstart, kloop, kinitndx, kfn_times",
    ],
    id: "seqtime",
    type: "opcode",
  },
  seqtime2: {
    synopsis: [
      "ktrig_out seqtime2 ktrig_in, ktime_unit, kstart, kloop, kinitndx, kfn_times",
    ],
    id: "seqtime2",
    type: "opcode",
  },
  serialBegin: {
    synopsis: ["iPort serialBegin SPortName [, ibaudRate]"],
    id: "serialBegin",
    type: "opcode",
  },
  serialEnd: {synopsis: [" serialEnd iPort"], id: "serialEnd", type: "opcode"},
  serialFlush: {
    synopsis: [" serialFlush iPort"],
    id: "serialFlush",
    type: "opcode",
  },
  serialPrint: {
    synopsis: [" serialPrint iPort"],
    id: "serialPrint",
    type: "opcode",
  },
  serialRead: {
    synopsis: ["kByte serialRead iPort"],
    id: "serialRead",
    type: "opcode",
  },
  serialrite: {
    synopsis: [
      " serialWrite iPort, iByte",
      " serialWrite iPort, kByte",
      " serialWrite iPort, SBytes",
    ],
    id: "serialWrite",
    type: "opcode",
  },
  serialrite_i: {
    synopsis: [" serialWrite_i iPort, iByte", " serialWrite_i iPort, SBytes"],
    id: "serialWrite_i",
    type: "opcode",
  },
  setcol: {
    synopsis: ["i/kout[] setcoli/kin[],i/kcol"],
    id: "setcol",
    type: "opcode",
  },
  setctrl: {
    synopsis: ["setctrl inum, ival, itype"],
    id: "setctrl",
    type: "opcode",
  },
  setksmps: {synopsis: ["setksmps iksmps"], id: "setksmps", type: "opcode"},
  setrow: {
    synopsis: ["i/kout[] setrow i/kin[],i/krow"],
    id: "setrow",
    type: "opcode",
  },
  setscorepos: {
    synopsis: [" setscorepos ipos"],
    id: "setscorepos",
    type: "opcode",
  },
  sfilist: {synopsis: ["sfilist ifilhandle"], id: "sfilist", type: "opcode"},
  sfinstr: {
    synopsis: [
      "ar1, ar2 sfinstr ivel, inotenum, xamp, xfreq, instrnum, ifilhandle [, iflag] [, ioffset]",
    ],
    id: "sfinstr",
    type: "opcode",
  },
  sfinstr3: {
    synopsis: [
      "ar1, ar2 sfinstr3 ivel, inotenum, xamp, xfreq, instrnum, ifilhandle [, iflag] [, ioffset]",
    ],
    id: "sfinstr3",
    type: "opcode",
  },
  sfinstr3m: {
    synopsis: [
      "ares sfinstr3m ivel, inotenum, xamp, xfreq, instrnum, ifilhandle [, iflag] [, ioffset]",
    ],
    id: "sfinstr3m",
    type: "opcode",
  },
  sfinstrm: {
    synopsis: [
      "ares sfinstrm ivel, inotenum, xamp, xfreq, instrnum, ifilhandle [, iflag] [, ioffset]",
    ],
    id: "sfinstrm",
    type: "opcode",
  },
  sfload: {
    synopsis: ['ir sfload "filename"'],
    id: "sfload",
    type: "opcode",
  },
  sflooper: {
    synopsis: [
      "ar1, ar2 sflooper ivel, inotenum, kamp, kpitch, ipreindex, kloopstart, kloopend, kcrossfade [, istart, imode, ifenv, iskip] ",
    ],
    id: "sflooper",
    type: "opcode",
  },
  sfpassign: {
    synopsis: ["sfpassign istartindex, ifilhandle[, imsgs]"],
    id: "sfpassign",
    type: "opcode",
  },
  sfplay: {
    synopsis: [
      "ar1, ar2 sfplay ivel, inotenum, xamp, xfreq, ipreindex [, iflag] [, ioffset] [, ienv]",
    ],
    id: "sfplay",
    type: "opcode",
  },
  sfplay3: {
    synopsis: [
      "ar1, ar2 sfplay3 ivel, inotenum, xamp, xfreq, ipreindex [, iflag] [, ioffset] [, ienv]",
    ],
    id: "sfplay3",
    type: "opcode",
  },
  sfplay3m: {
    synopsis: [
      "ares sfplay3m ivel, inotenum, xamp, xfreq, ipreindex [, iflag] [, ioffset] [, ienv]",
    ],
    id: "sfplay3m",
    type: "opcode",
  },
  sfplaym: {
    synopsis: [
      "ares sfplaym ivel, inotenum, xamp, xfreq, ipreindex [, iflag] [, ioffset] [, ienv]",
    ],
    id: "sfplaym",
    type: "opcode",
  },
  sfplist: {synopsis: ["sfplist ifilhandle"], id: "sfplist", type: "opcode"},
  sfpreset: {
    synopsis: ["ir sfpreset iprog, ibank, ifilhandle, ipreindex"],
    id: "sfpreset",
    type: "opcode",
  },
  shaker: {
    synopsis: ["ares shaker kamp, kfreq, kbeans, kdamp, ktimes [, idecay]"],
    id: "shaker",
    type: "opcode",
  },
  shiftin: {
    synopsis: ["kout[] shiftin asig"],
    id: "shiftin",
    type: "opcode",
  },
  shiftout: {
    synopsis: ["asig shiftout kIn[][, ioff]"],
    id: "shiftout",
    type: "opcode",
  },
  signum: {
    synopsis: ["signum(x) (no rate restriction)"],
    id: "signum",
    type: "opcode",
  },
  sin: {
    synopsis: ["sin(x) (no rate restriction)", "sin(k/i[]) (k- or i-arrays )"],
    id: "sin",
    type: "opcode",
  },
  sinh: {
    synopsis: [
      "sinh(x) (no rate restriction)",
      "sinh(k/i[]) (k- or i-arrays )",
    ],
    id: "sinh",
    type: "opcode",
  },
  sininv: {
    synopsis: [
      "sininv(x) (no rate restriction)",
      "sininv(k/i[]) (k- or i-arrays)",
    ],
    id: "sininv",
    type: "opcode",
  },
  sinsyn: {
    synopsis: ["asig sinsyn fin, kscal, kmaxtracks, ifn"],
    id: "sinsyn",
    type: "opcode",
  },
  sleighbells: {
    synopsis: [
      "ares sleighbells kamp, idettack [, inum] [, idamp] [, imaxshake] [, ifreq] [, ifreq1] [, ifreq2]",
    ],
    id: "sleighbells",
    type: "opcode",
  },
  slicearray: {
    synopsis: ["karray slicearray kinarray, istart, iend [,istride]"],
    id: "slicearray",
    type: "opcode",
  },
  slider16: {
    synopsis: [
      "i1,...,i16 slider16 ichan, ictlnum1, imin1, imax1, init1, ifn1,..., ictlnum16, imin16, imax16, init16, ifn16",
      "k1,...,k16 slider16 ichan, ictlnum1, imin1, imax1, init1, ifn1,..., ictlnum16, imin16, imax16, init16, ifn16",
    ],
    id: "slider16",
    type: "opcode",
  },
  slider16f: {
    synopsis: [
      "k1,...,k16 slider16f ichan, ictlnum1, imin1, imax1, init1, ifn1, icutoff1,..., ictlnum16, imin16, imax16, init16, ifn16, icutoff16",
    ],
    id: "slider16f",
    type: "opcode",
  },
  slider16table: {
    synopsis: [
      "kflag slider16table ichan, ioutTable, ioffset, ictlnum1, imin1, imax1, init1, ifn1, .... , ictlnum16, imin16, imax16, init16, ifn16",
    ],
    id: "slider16table",
    type: "opcode",
  },
  slider16tablef: {
    synopsis: [
      "kflag slider16tablef ichan, ioutTable, ioffset, ictlnum1, imin1, imax1, init1, ifn1, icutoff1, .... , ictlnum16, imin16, imax16, init16, ifn16, icutoff16",
    ],
    id: "slider16tablef",
    type: "opcode",
  },
  slider32: {
    synopsis: [
      "i1,...,i32 slider32 ichan, ictlnum1, imin1, imax1, init1, ifn1,..., ictlnum32, imin32, imax32, init32, ifn32",
      "k1,...,k32 slider32 ichan, ictlnum1, imin1, imax1, init1, ifn1,..., ictlnum32, imin32, imax32, init32, ifn32",
    ],
    id: "slider32",
    type: "opcode",
  },
  slider32f: {
    synopsis: [
      "k1,...,k32 slider32f ichan, ictlnum1, imin1, imax1, init1, ifn1, icutoff1, ..., ictlnum32, imin32, imax32, init32, ifn32, icutoff32",
    ],
    id: "slider32f",
    type: "opcode",
  },
  slider32table: {
    synopsis: [
      "kflag slider32table ichan, ioutTable, ioffset, ictlnum1, imin1, imax1, init1, ifn1, .... , ictlnum32, imin32, imax32, init32, ifn32",
    ],
    id: "slider32table",
    type: "opcode",
  },
  slider32tablef: {
    synopsis: [
      "kflag slider32tablef ichan, ioutTable, ioffset, ictlnum1, imin1, imax1, init1, ifn1, icutoff1, .... , ictlnum32, imin32, imax32, init32, ifn32, icutoff32",
    ],
    id: "slider32tablef",
    type: "opcode",
  },
  slider64: {
    synopsis: [
      "i1,...,i64 slider64 ichan, ictlnum1, imin1, imax1, init1, ifn1,..., ictlnum64, imin64, imax64, init64, ifn64",
      "k1,...,k64 slider64 ichan, ictlnum1, imin1, imax1, init1, ifn1,..., ictlnum64, imin64, imax64, init64, ifn64",
    ],
    id: "slider64",
    type: "opcode",
  },
  slider64f: {
    synopsis: [
      "k1,...,k64 slider64f ichan, ictlnum1, imin1, imax1, init1, ifn1, icutoff1,..., ictlnum64, imin64, imax64, init64, ifn64, icutoff64",
    ],
    id: "slider64f",
    type: "opcode",
  },
  slider64table: {
    synopsis: [
      "kflag slider64table ichan, ioutTable, ioffset, ictlnum1, imin1, imax1, init1, ifn1, .... , ictlnum64, imin64, imax64, init64, ifn64",
    ],
    id: "slider64table",
    type: "opcode",
  },
  slider64tablef: {
    synopsis: [
      "kflag slider64tablef ichan, ioutTable, ioffset, ictlnum1, imin1, imax1, init1, ifn1, icutoff1, .... , ictlnum64, imin64, imax64, init64, ifn64, icutoff64",
    ],
    id: "slider64tablef",
    type: "opcode",
  },
  slider8: {
    synopsis: [
      "i1,...,i8 slider8 ichan, ictlnum1, imin1, imax1, init1, ifn1,..., ictlnum8, imin8, imax8, init8, ifn8",
      "k1,...,k8 slider8 ichan, ictlnum1, imin1, imax1, init1, ifn1,..., ictlnum8, imin8, imax8, init8, ifn8",
    ],
    id: "slider8",
    type: "opcode",
  },
  slider8f: {
    synopsis: [
      "k1,...,k8 slider8f ichan, ictlnum1, imin1, imax1, init1, ifn1, icutoff1, ..., ictlnum8, imin8, imax8, init8, ifn8, icutoff8",
    ],
    id: "slider8f",
    type: "opcode",
  },
  slider8table: {
    synopsis: [
      "kflag slider8table ichan, ioutTable, ioffset, ictlnum1, imin1, imax1, init1, ifn1,..., ictlnum8, imin8, imax8, init8, ifn8",
    ],
    id: "slider8table",
    type: "opcode",
  },
  slider8tablef: {
    synopsis: [
      "kflag slider8tablef ichan, ioutTable, ioffset, ictlnum1, imin1, imax1, init1, ifn1, icutoff1, .... , ictlnum8, imin8, imax8, init8, ifn8, icutoff8",
    ],
    id: "slider8tablef",
    type: "opcode",
  },
  sliderKawai: {
    synopsis: [
      "k1, k2, ...., k16 sliderKawai imin1, imax1, init1, ifn1, imin2, imax2, init2, ifn2, ..., imin16, imax16, init16, ifn16",
    ],
    id: "sliderKawai",
    type: "opcode",
  },
  sndload: {
    synopsis: [
      "sndload Sfname[, ifmt[, ichns[, isr[, ibas[, iamp[, istrt [, ilpmod[, ilps[, ilpe]]]]]]]]]",
    ],
    id: "sndload",
    type: "opcode",
  },
  sndloop: {
    synopsis: ["asig, krec sndloop ain, kpitch, ktrig, idur, ifad"],
    id: "sndloop",
    type: "opcode",
  },
  sndwarp: {
    synopsis: [
      "ares [, ac] sndwarp xamp, xtimewarp, xresample, ifn1, ibeg, iwsize, irandw, ioverlap, ifn2, itimemode",
    ],
    id: "sndwarp",
    type: "opcode",
  },
  sndwarpst: {
    synopsis: [
      "ar1, ar2 [,ac1] [, ac2] sndwarpst xamp, xtimewarp, xresample, ifn1, ibeg, iwsize, irandw, ioverlap, ifn2, itimemode",
    ],
    id: "sndwarpst",
    type: "opcode",
  },
  sockrecv: {
    synopsis: [
      "asig sockrecv iport, ilength",
      "ksig sockrecv iport, ilength",
      "asigl, asigr sockrecvs iport, ilength",
      "String sockrecv iport, ilength",
      "asig[,kstate] strecv Sipaddr, iport",
    ],
    id: "sockrecv",
    type: "opcode",
  },
  socksend: {
    synopsis: [
      "socksend asig, Sipaddr, iport, ilength",
      "socksend ksig, Sipaddr, iport, ilength",
      "socksends asigl, asigr, Sipaddr, iport, ilength",
      "stsend asig, Sipaddr, iport",
    ],
    id: "socksend",
    type: "opcode",
  },
  sorta: {
    synopsis: ["k/i[]sorta k/i[] (k- or i-arrays )"],
    id: "sorta",
    type: "opcode",
  },
  sortd: {
    synopsis: ["k/i[]sortd k/i[] (k- or i-arrays )"],
    id: "sortd",
    type: "opcode",
  },
  soundin: {
    synopsis: [
      "ar1[, ar2[, ar3[, ... a24]]] soundin ifilcod [, iskptim] [, iformat] [, iskipinit] [, ibufsize]",
    ],
    id: "soundin",
    type: "opcode",
  },
  soundout: {
    synopsis: ["soundout asig1, ifilcod [, iformat]"],
    id: "soundout",
    type: "opcode",
  },
  soundouts: {
    synopsis: ["soundouts asigl, asigr, ifilcod [, iformat]"],
    id: "soundouts",
    type: "opcode",
  },
  space: {
    synopsis: ["a1, a2, a3, a4 space asig, ifn, ktime, kreverbsend, kx, ky"],
    id: "space",
    type: "opcode",
  },
  spat3d: {
    synopsis: [
      "aW, aX, aY, aZ spat3d ain, kX, kY, kZ, idist, ift, imode, imdel, iovr [, istor]",
    ],
    id: "spat3d",
    type: "opcode",
  },
  spat3di: {
    synopsis: [
      "aW, aX, aY, aZ spat3di ain, iX, iY, iZ, idist, ift, imode [, istor]",
    ],
    id: "spat3di",
    type: "opcode",
  },
  spat3dt: {
    synopsis: [
      "spat3dt ioutft, iX, iY, iZ, idist, ift, imode, irlen [, iftnocl]",
    ],
    id: "spat3dt",
    type: "opcode",
  },
  spdist: {
    synopsis: ["k1 spdist ifn, ktime, kx, ky"],
    id: "spdist",
    type: "opcode",
  },
  specaddm: {
    synopsis: ["wsig specaddm wsig1, wsig2 [, imul2]"],
    id: "specaddm",
    type: "opcode",
  },
  specdiff: {
    synopsis: ["wsig specdiff wsigin"],
    id: "specdiff",
    type: "opcode",
  },
  specdisp: {
    synopsis: ["specdisp wsig, iprd [, iwtflg]"],
    id: "specdisp",
    type: "opcode",
  },
  specfilt: {
    synopsis: ["wsig specfilt wsigin, ifhtim"],
    id: "specfilt",
    type: "opcode",
  },
  spechist: {
    synopsis: ["wsig spechist wsigin"],
    id: "spechist",
    type: "opcode",
  },
  specptrk: {
    synopsis: [
      "koct, kamp specptrk wsig, kvar, ilo, ihi, istr, idbthresh, inptls, irolloff [, iodd] [, iconfs] [, interp] [, ifprd] [, iwtflg]",
    ],
    id: "specptrk",
    type: "opcode",
  },
  specscal: {
    synopsis: ["wsig specscal wsigin, ifscale, ifthresh"],
    id: "specscal",
    type: "opcode",
  },
  specsum: {
    synopsis: ["ksum specsum wsig [, interp]"],
    id: "specsum",
    type: "opcode",
  },
  spectrum: {
    synopsis: [
      "wsig spectrum xsig, iprd, iocts, ifrqa [, iq] [, ihann] [, idbout] [, idsprd] [, idsinrs]",
    ],
    id: "spectrum",
    type: "opcode",
  },
  splitrig: {
    synopsis: ["splitrig ktrig, kndx, imaxtics, ifn, kout1 [,kout2,...,koutN]"],
    id: "splitrig",
    type: "opcode",
  },
  sprintf: {
    synopsis: ["Sdst sprintf Sfmt, xarg1[, xarg2[, ... ]]"],
    id: "sprintf",
    type: "opcode",
  },
  sprintfk: {
    synopsis: ["Sdst sprintfk Sfmt, xarg1[, xarg2[, ... ]]"],
    id: "sprintfk",
    type: "opcode",
  },
  spsend: {
    synopsis: ["a1, a2, a3, a4 spsend"],
    id: "spsend",
    type: "opcode",
  },
  sqrt: {
    synopsis: [
      "sqrt(x) (no rate restriction)",
      "sqrt(k/i[]) (k- or i-arrays )",
    ],
    id: "sqrt",
    type: "opcode",
  },
  squinewave: {
    synopsis: [
      "aout [, asyncout] squinewave acps, aClip, aSkew, asyncin [, iMinSweep] [, iphase]",
      "aout [, asyncout] squinewave acps, aClip, aSkew [, ksyncin] [, iMinSweep] [, iphase]",
    ],
    id: "squinewave",
    type: "opcode",
  },
  sr: {synopsis: ["sr = iarg"], id: "sr", type: "opcode"},
  stack: {synopsis: ["stack iStackSize"], id: "stack", type: "opcode"},
  statevar: {
    synopsis: ["ahp,alp,abp,abr statevar ain, xcf, xq [, iosamps, istor]"],
    id: "statevar",
    type: "opcode",
  },
  sterrain: {
    synopsis: [
      "aout sterrain kamp, kcps, kx, ky, krx, kry, krot, ktab0, ktab1, km1, km2, kn1, kn2, kn3, ka, kb, kperiod ",
    ],
    id: "sterrain",
    type: "opcode",
  },
  stix: {
    synopsis: ["ares stix iamp, idettack [, inum] [, idamp] [, imaxshake]"],
    id: "stix",
    type: "opcode",
  },
  strcat: {
    synopsis: ["Sdst strcat Ssrc1, Ssrc2"],
    id: "strcat",
    type: "opcode",
  },
  strcatk: {
    synopsis: ["Sdst strcatk Ssrc1, Ssrc2"],
    id: "strcatk",
    type: "opcode",
  },
  strchar: {
    synopsis: ["ichr strchar Sstr[, ipos]"],
    id: "strchar",
    type: "opcode",
  },
  strchark: {
    synopsis: ["kchr strchark Sstr[, kpos]"],
    id: "strchark",
    type: "opcode",
  },
  strcmp: {synopsis: ["ires strcmp S1, S2"], id: "strcmp", type: "opcode"},
  strcmpk: {
    synopsis: ["kres strcmpk S1, S2"],
    id: "strcmpk",
    type: "opcode",
  },
  strcpy: {
    synopsis: ["Sdst strcpy Ssrc", "Sdst = Ssrc"],
    id: "strcpy",
    type: "opcode",
  },
  strcpyk: {synopsis: ["Sdst strcpyk Ssrc"], id: "strcpyk", type: "opcode"},
  streson: {
    synopsis: ["ares streson asig, kfr, kfdbgain"],
    id: "streson",
    type: "opcode",
  },
  strfromurl: {
    synopsis: ["Sdst strfromurl StringURL"],
    id: "strfromurl",
    type: "opcode",
  },
  strget: {synopsis: ["Sdst strget indx"], id: "strget", type: "opcode"},
  strindex: {
    synopsis: ["ipos strindex S1, S2"],
    id: "strindex",
    type: "opcode",
  },
  strindexk: {
    synopsis: ["kpos strindexk S1, S2"],
    id: "strindexk",
    type: "opcode",
  },
  strlen: {synopsis: ["ilen strlen Sstr"], id: "strlen", type: "opcode"},
  strlenk: {synopsis: ["klen strlenk Sstr"], id: "strlenk", type: "opcode"},
  strlower: {
    synopsis: ["Sdst strlower Ssrc"],
    id: "strlower",
    type: "opcode",
  },
  strlowerk: {
    synopsis: ["Sdst strlowerk Ssrc"],
    id: "strlowerk",
    type: "opcode",
  },
  strrindex: {
    synopsis: ["ipos strrindex S1, S2"],
    id: "strrindex",
    type: "opcode",
  },
  strrindexk: {
    synopsis: ["kpos strrindexk S1, S2"],
    id: "strrindexk",
    type: "opcode",
  },
  strset: {
    synopsis: ["strset iarg, istring"],
    id: "strset",
    type: "opcode",
  },
  strstrip: {
    synopsis: ["Sout strstrip Sin [, Smode]"],
    id: "strstrip",
    type: "opcode",
  },
  strsub: {
    synopsis: ["Sdst strsub Ssrc[, istart[, iend]]"],
    id: "strsub",
    type: "opcode",
  },
  strsubk: {
    synopsis: ["Sdst strsubk Ssrc, kstart, kend"],
    id: "strsubk",
    type: "opcode",
  },
  strtod: {
    synopsis: ["ir strtod Sstr", "ir strtod indx"],
    id: "strtod",
    type: "opcode",
  },
  strtodk: {
    synopsis: ["kr strtodk Sstr", "kr strtodk kndx"],
    id: "strtodk",
    type: "opcode",
  },
  strtol: {
    synopsis: ["ir strtol Sstr", "ir strtol indx"],
    id: "strtol",
    type: "opcode",
  },
  strtolk: {
    synopsis: ["kr strtolk Sstr", "kr strtolk kndx"],
    id: "strtolk",
    type: "opcode",
  },
  strupper: {
    synopsis: ["Sdst strupper Ssrc"],
    id: "strupper",
    type: "opcode",
  },
  strupperk: {
    synopsis: ["Sdst strupperk Ssrc"],
    id: "strupperk",
    type: "opcode",
  },
  subinstr: {
    synopsis: [
      "a1, [...] [, a8] subinstr instrnum [, p4] [, p5] [...]",
      'a1, [...] [, a8] subinstr "insname" [, p4] [, p5] [...]',
    ],
    id: "subinstr",
    type: "opcode",
  },
  subinstrinit: {
    synopsis: [
      "subinstrinit instrnum [, p4] [, p5] [...]",
      'subinstrinit "insname" [, p4] [, p5] [...]',
    ],
    id: "subinstrinit",
    type: "opcode",
  },
  "-": {
    synopsis: ["-a (no rate restriction)", "a - b (no rate restriction)"],
    id: "subtracts",
    type: "opcode",
  },
  sum: {
    synopsis: [
      "ares sum asig1 [, asig2] [, asig3] [...]",
      "kres sum karr",
      "ires sum iarr",
    ],
    id: "sum",
    type: "opcode",
  },
  sumarray: {
    synopsis: ["ksum sumarray karray"],
    id: "sumarray",
    type: "opcode",
  },
  svfilter: {
    synopsis: ["alow, ahigh, aband svfilter asig, kcf, kq [, iscl] [, iskip]"],
    id: "svfilter",
    type: "opcode",
  },
  syncgrain: {
    synopsis: [
      "asig syncgrain kamp, kfreq, kpitch, kgrsize, kprate, ifun1, ifun2, iolaps",
    ],
    id: "syncgrain",
    type: "opcode",
  },
  syncloop: {
    synopsis: [
      "asig syncloop kamp, kfreq, kpitch, kgrsize, kprate, klstart, klend, ifun1, ifun2, iolaps[,istart, iskip]",
    ],
    id: "syncloop",
    type: "opcode",
  },
  syncphasor: {
    synopsis: ["aphase, asyncout syncphasor xcps, asyncin, [, iphs]"],
    id: "syncphasor",
    type: "opcode",
  },
  system: {
    synopsis: [
      "ires system_i itrig, Scmd, [inowait]",
      "kres system ktrig, Scmd, [knowait]",
    ],
    id: "system",
    type: "opcode",
  },
  tab: {
    synopsis: ["kr tab kndx, ifn[, ixmode]", "ar tab xndx, ifn[, ixmode]"],
    id: "tab",
    type: "opcode",
  },
  tab2array: {
    synopsis: [
      "kout[] tab2array ifn [, kstart, kend, kstep ]",
      "iout[] tab2array ifn [, istart, iend, istep ]",
    ],
    id: "tab2array",
    type: "opcode",
  },
  tab2pvs: {
    synopsis: [
      "fsig tab2pvs tvar|karr[][,ihopsize, iwinsize, iwintype]",
      "fsig tab2pvs kmags[], kfreqs[][,ihopsize, iwinsize, iwintype]",
    ],
    id: "tab2pvs",
    type: "opcode",
  },
  tab_i: {
    synopsis: ["ir tab_i indx, ifn[, ixmode]"],
    id: "tab_i",
    type: "opcode",
  },
  tabifd: {
    synopsis: [
      "ffr,fphs tabifd ktimpt, kamp, kpitch, ifftsize, ihopsize, iwintype,ifn",
    ],
    id: "tabifd",
    type: "opcode",
  },
  table: {
    synopsis: [
      "ares table andx, ifn [, ixmode] [, ixoff] [, iwrap]",
      "ires table indx, ifn [, ixmode] [, ixoff] [, iwrap]",
      "kres table kndx, ifn [, ixmode] [, ixoff] [, iwrap]",
    ],
    id: "table",
    type: "opcode",
  },
  table3: {
    synopsis: [
      "ares table3 andx, ifn [, ixmode] [, ixoff] [, iwrap]",
      "ires table3 indx, ifn [, ixmode] [, ixoff] [, iwrap]",
      "kres table3 kndx, ifn [, ixmode] [, ixoff] [, iwrap]",
    ],
    id: "table3",
    type: "opcode",
  },
  tablecopy: {
    synopsis: ["tablecopy kdft, ksft"],
    id: "tablecopy",
    type: "opcode",
  },
  tablefilter: {
    synopsis: ["knumpassed tablefilter kouttable, kintatble, kmode, kparam"],
    id: "tablefilter",
    type: "opcode",
  },
  tablefilteri: {
    synopsis: ["inumpassed tablefilteri iouttable, iintatble, imode, iparam"],
    id: "tablefilteri",
    type: "opcode",
  },
  tablegpw: {synopsis: ["tablegpw kfn"], id: "tablegpw", type: "opcode"},
  tablei: {
    synopsis: [
      "ares tablei andx, ifn [, ixmode] [, ixoff] [, iwrap]",
      "ires tablei indx, ifn [, ixmode] [, ixoff] [, iwrap]",
      "kres tablei kndx, ifn [, ixmode] [, ixoff] [, iwrap]",
    ],
    id: "tablei",
    type: "opcode",
  },
  tableicopy: {
    synopsis: ["tableicopy idft, isft"],
    id: "tableicopy",
    type: "opcode",
  },
  tableigpw: {synopsis: ["tableigpw ifn"], id: "tableigpw", type: "opcode"},
  tableikt: {
    synopsis: [
      "ares tableikt xndx, kfn [, ixmode] [, ixoff] [, iwrap]",
      "kres tableikt kndx, kfn [, ixmode] [, ixoff] [, iwrap]",
    ],
    id: "tableikt",
    type: "opcode",
  },
  tableimix: {
    synopsis: [
      "tableimix idft, idoff, ilen, is1ft, is1off, is1g, is2ft, is2off, is2g",
    ],
    id: "tableimix",
    type: "opcode",
  },
  tableiw: {
    synopsis: ["tableiw isig, indx, ifn [, ixmode] [, ixoff] [, iwgmode]"],
    id: "tableiw",
    type: "opcode",
  },
  tablekt: {
    synopsis: [
      "ares tablekt xndx, kfn [, ixmode] [, ixoff] [, iwrap]",
      "kres tablekt kndx, kfn [, ixmode] [, ixoff] [, iwrap]",
    ],
    id: "tablekt",
    type: "opcode",
  },
  tablemix: {
    synopsis: [
      "tablemix kdft, kdoff, klen, ks1ft, ks1off, ks1g, ks2ft, ks2off, ks2g",
    ],
    id: "tablemix",
    type: "opcode",
  },
  tableng: {
    synopsis: ["ires tableng ifn", "kres tableng kfn"],
    id: "tableng",
    type: "opcode",
  },
  tablera: {
    synopsis: ["ares tablera kfn, kstart, koff"],
    id: "tablera",
    type: "opcode",
  },
  tableseg: {
    synopsis: ["tableseg ifn1, idur1, ifn2 [, idur2] [, ifn3] [...]"],
    id: "tableseg",
    type: "opcode",
  },
  tableshuffle: {
    synopsis: ["tableshuffle ktablenum", "tableshufflei itablenum"],
    id: "tableshuffle",
    type: "opcode",
  },
  tablew: {
    synopsis: [
      "tablew asig, andx, ifn [, ixmode] [, ixoff] [, iwgmode]",
      "tablew isig, indx, ifn [, ixmode] [, ixoff] [, iwgmode]",
      "tablew ksig, kndx, ifn [, ixmode] [, ixoff] [, iwgmode]",
    ],
    id: "tablew",
    type: "opcode",
  },
  tablewa: {
    synopsis: ["kstart tablewa kfn, asig, koff"],
    id: "tablewa",
    type: "opcode",
  },
  tablewkt: {
    synopsis: [
      "tablewkt asig, andx, kfn [, ixmode] [, ixoff] [, iwgmode]",
      "tablewkt ksig, kndx, kfn [, ixmode] [, ixoff] [, iwgmode]",
    ],
    id: "tablewkt",
    type: "opcode",
  },
  tablexkt: {
    synopsis: [
      "ares tablexkt xndx, kfn, kwarp, iwsize [, ixmode] [, ixoff] [, iwrap]",
    ],
    id: "tablexkt",
    type: "opcode",
  },
  tablexseg: {
    synopsis: ["tablexseg ifn1, idur1, ifn2 [, idur2] [, ifn3] [...]"],
    id: "tablexseg",
    type: "opcode",
  },
  tabmorph: {
    synopsis: [
      "kout tabmorph kindex, kweightpoint, ktabnum1, ktabnum2, ifn1, ifn2 [, ifn3, ifn4, ...,ifnN]",
    ],
    id: "tabmorph",
    type: "opcode",
  },
  tabmorpha: {
    synopsis: [
      "aout tabmorpha aindex, aweightpoint, atabnum1, atabnum2, ifn1, ifn2 [, ifn3, ifn4, ... ifnN]",
    ],
    id: "tabmorpha",
    type: "opcode",
  },
  tabmorphak: {
    synopsis: [
      "aout tabmorphak aindex, kweightpoint, ktabnum1, ktabnum2, ifn1, ifn2 [, ifn3, ifn4, ... ifnN]",
    ],
    id: "tabmorphak",
    type: "opcode",
  },
  tabmorphi: {
    synopsis: [
      "kout tabmorphi kindex, kweightpoint, ktabnum1, ktabnum2, ifn1, ifn2 [, ifn3, ifn4, ..., ifnN]",
    ],
    id: "tabmorphi",
    type: "opcode",
  },
  tabplay: {
    synopsis: ["tabplay ktrig, knumtics, kfn, kout1 [,kout2,..., koutN]"],
    id: "tabplay",
    type: "opcode",
  },
  tabrec: {
    synopsis: [
      "tabrec ktrig_start, ktrig_stop, knumtics, kfn, kin1 [,kin2,...,kinN]",
    ],
    id: "tabrec",
    type: "opcode",
  },
  tabrowlin: {
    synopsis: [
      "tabrowlin krow, ifnsrc, ifndest, inumcols [, ioffset, istart, iend, istep ]",
    ],
    id: "tabrowlin",
    type: "opcode",
  },
  tabsum: {
    synopsis: ["kr tabsum ifn[[, kmin] [, kmax]]"],
    id: "tabsum",
    type: "opcode",
  },
  tabw: {synopsis: [], id: "tabw", type: "opcode"},
  tabw_i: {
    synopsis: ["tabw_i isig, indx, ifn [,ixmode]"],
    id: "tabw_i",
    type: "opcode",
  },
  tambourine: {
    synopsis: [
      "ares tambourine kamp, idettack [, inum] [, idamp] [, imaxshake] [, ifreq] [, ifreq1] [, ifreq2]",
    ],
    id: "tambourine",
    type: "opcode",
  },
  tan: {
    synopsis: ["tan(x) (no rate restriction)", "tan(k/i[]) (k- or i-arrays )"],
    id: "tan",
    type: "opcode",
  },
  tanh: {
    synopsis: [
      "tanh(x) (no rate restriction)",
      "tanh(k/i[]) (k- or i-arrays )",
    ],
    id: "tanh",
    type: "opcode",
  },
  taninv: {
    synopsis: [
      "taninv(x) (no rate restriction)",
      "taninv(k/i[]) (k- or i-arrays )",
    ],
    id: "taninv",
    type: "opcode",
  },
  taninv2: {
    synopsis: [
      "ares taninv2 ay, ax",
      "ires taninv2 iy, ix",
      "kres taninv2 ky, kx",
      "...taninv2(ky, kx)... (no rate restriction)",
    ],
    id: "taninv2",
    type: "opcode",
  },
  tb0: {
    synopsis: [
      "tb0_init ifn",
      "tb1_init ifn",
      "tb2_init ifn",
      "tb3_init ifn",
      "tb4_init ifn",
      "tb5_init ifn",
      "tb6_init ifn",
      "tb7_init ifn",
      "tb8_init ifn",
      "tb9_init ifn",
      "tb10_init ifn",
      "tb11_init ifn",
      "tb12_init ifn",
      "tb13_init ifn",
      "tb14_init ifn",
      "tb15_init ifn",
      "iout = tb0(iIndex)",
      "kout = tb0(kIndex)",
      "iout = tb1(iIndex)",
      "kout = tb1(kIndex)",
      "iout = tb2(iIndex)",
      "kout = tb2(kIndex)",
      "iout = tb3(iIndex)",
      "kout = tb3(kIndex)",
      "iout = tb4(iIndex)",
      "kout = tb4(kIndex)",
      "iout = tb5(iIndex)",
      "kout = tb5(kIndex)",
      "iout = tb6(iIndex)",
      "kout = tb6(kIndex)",
      "iout = tb7(iIndex)",
      "kout = tb7(kIndex)",
      "iout = tb8(iIndex)",
      "kout = tb8(kIndex)",
      "iout = tb9(iIndex)",
      "kout = tb9(kIndex)",
      "iout = tb10(iIndex)",
      "kout = tb10(kIndex)",
      "iout = tb11(iIndex)",
      "kout = tb11(kIndex)",
      "iout = tb12(iIndex)",
      "kout = tb12(kIndex)",
      "iout = tb13(iIndex)",
      "kout = tb13(kIndex)",
      "iout = tb14(iIndex)",
      "kout = tb14(kIndex)",
      "iout = tb15(iIndex)",
      "kout = tb15(kIndex)",
    ],
    id: "tb",
    type: "opcode",
  },
  tbvcf: {
    synopsis: ["ares tbvcf asig, xfco, xres, kdist, kasym [, iskip]"],
    id: "tbvcf",
    type: "opcode",
  },
  tempest: {
    synopsis: [
      "ktemp tempest kin, iprd, imindur, imemdur, ihp, ithresh, ihtim, ixfdbak, istartempo, ifn [, idisprd] [, itweek]",
    ],
    id: "tempest",
    type: "opcode",
  },
  tempo: {
    synopsis: ["tempo ktempo, istartempo"],
    id: "tempo",
    type: "opcode",
  },
  temposcal: {
    synopsis: [
      "asig temposcal ktimescal, kamp, kpitch, ktab, klock [,ifftsize, idecim, ithresh] ",
    ],
    id: "temposcal",
    type: "opcode",
  },
  tempoval: {synopsis: ["kres tempoval"], id: "tempoval", type: "opcode"},
  tigoto: {synopsis: ["tigoto label"], id: "tigoto", type: "opcode"},
  timedseq: {
    synopsis: ["ktrig timedseq ktimpnt, ifn, kp1 [,kp2, kp3, ...,kpN]"],
    id: "timedseq",
    type: "opcode",
  },
  timeinstk: {synopsis: ["kres timeinstk"], id: "timeinstk", type: "opcode"},
  timeinsts: {synopsis: ["kres timeinsts"], id: "timeinsts", type: "opcode"},
  timek: {
    synopsis: ["ires timek", "kres timek"],
    id: "timek",
    type: "opcode",
  },
  times: {
    synopsis: ["ires times", "kres times"],
    id: "times",
    type: "opcode",
  },
  timout: {
    synopsis: ["timout istrt, idur, label"],
    id: "timout",
    type: "opcode",
  },
  tival: {synopsis: ["ir tival"], id: "tival", type: "opcode"},
  tlineto: {
    synopsis: ["kres tlineto ksig, ktime, ktrig"],
    id: "tlineto",
    type: "opcode",
  },
  tone: {
    synopsis: ["ares tone asig, khp [, iskip]"],
    id: "tone",
    type: "opcode",
  },
  tonek: {
    synopsis: ["kres tonek ksig, khp [, iskip]"],
    id: "tonek",
    type: "opcode",
  },
  tonex: {
    synopsis: [
      "ares tonex asig, khp [, inumlayer] [, iskip]",
      "ares tonex asig, ahp [, inumlayer] [, iskip]",
    ],
    id: "tonex",
    type: "opcode",
  },
  tradsyn: {
    synopsis: ["asig tradsyn fin, kscal, kpitch, kmaxtracks, ifn"],
    id: "tradsyn",
    type: "opcode",
  },
  trandom: {
    synopsis: ["kout trandom ktrig, kmin, kmax"],
    id: "trandom",
    type: "opcode",
  },
  transeg: {
    synopsis: [
      "ares transeg ia, idur, itype, ib [, idur2] [, itype] [, ic] ...",
      "kres transeg ia, idur, itype, ib [, idur2] [, itype] [, ic] ...",
    ],
    id: "transeg",
    type: "opcode",
  },
  transegb: {
    synopsis: [
      "ares transegb ia, itim, itype, ib [, itim2] [, itype] [, ic] ...",
      "kres transegb ia, itim, itype, ib [, itim2] [, itype] [, ic] ...",
    ],
    id: "transegb",
    type: "opcode",
  },
  transegr: {
    synopsis: [
      "ares transegr ia, idur, itype, ib [, idur2] [, itype] [, ic] ...",
      "kres transegr ia, idur, itype, ib [, idur2] [, itype] [, ic] ...",
    ],
    id: "transegr",
    type: "opcode",
  },
  trcross: {
    synopsis: ["fsig trcross fin1, fin2, ksearch, kdepth [, kmode] "],
    id: "trcross",
    type: "opcode",
  },
  trfilter: {
    synopsis: ["fsig trfilter fin, kamnt, ifn"],
    id: "trfilter",
    type: "opcode",
  },
  trhighest: {
    synopsis: ["fsig, kfr, kamp trhighest fin1, kscal"],
    id: "trhighest",
    type: "opcode",
  },
  trigger: {
    synopsis: ["kout trigger ksig, kthreshold, kmode"],
    id: "trigger",
    type: "opcode",
  },
  trighold: {
    synopsis: ["aout trighold ain, kdur", "kout trighold kin, kdur"],
    id: "trighold",
    type: "opcode",
  },
  trigphasor: {
    synopsis: [
      "aindex trigphasor xtrig, xrate, kstart, kend [, kresetPos] ",
      "kindex trigphasor xtrig, xrate, kstart, kend [, kresetPos] ",
    ],
    id: "trigphasor",
    type: "opcode",
  },
  trigseq: {
    synopsis: [
      "trigseq ktrig_in, kstart, kloop, kinitndx, kfn_values, kout1 [, kout2] [...]",
    ],
    id: "trigseq",
    type: "opcode",
  },
  trim: {
    synopsis: ["trim_i iarray, ilen", "trim xarray, klen"],
    id: "trim",
    type: "opcode",
  },
  trirand: {
    synopsis: [
      "ares trirand krange",
      "ires trirand krange",
      "kres trirand krange",
    ],
    id: "trirand",
    type: "opcode",
  },
  trlowest: {
    synopsis: ["fsig, kfr, kamp trlowest fin1, kscal"],
    id: "trlowest",
    type: "opcode",
  },
  trmix: {
    synopsis: ["fsig trmix fin1, fin2 "],
    id: "trmix",
    type: "opcode",
  },
  trscale: {
    synopsis: ["fsig trscale fin, kpitch[, kgain]"],
    id: "trscale",
    type: "opcode",
  },
  trshift: {
    synopsis: ["fsig trshift fin, kpshift[, kgain]"],
    id: "trshift",
    type: "opcode",
  },
  trsplit: {
    synopsis: ["fsiglow, fsighi trsplit fin, ksplit[, kgainlow, kgainhigh]"],
    id: "trsplit",
    type: "opcode",
  },
  turnoff: {
    synopsis: ["turnoff", "turnoff inst", "turnoff knst"],
    id: "turnoff",
    type: "opcode",
  },
  turnoff2: {
    synopsis: ["turnoff2 kinsno, kmode, krelease "],
    id: "turnoff2",
    type: "opcode",
  },
  turnon: {
    synopsis: ["turnon insnum [, itime]"],
    id: "turnon",
    type: "opcode",
  },
  tvconv: {
    synopsis: ["ares tvconv asig1, asig2, xfreez1, xfreez2, iparts, ifils"],
    id: "tvconv",
    type: "opcode",
  },
  "#undef": {synopsis: ["#undef NAME"], id: "undef", type: "opcode"},
  unirand: {
    synopsis: [
      "ares unirand krange",
      "ires unirand krange",
      "kres unirand krange",
    ],
    id: "unirand",
    type: "opcode",
  },
  until: {
    synopsis: ["until condition do ... od"],
    id: "until",
    type: "opcode",
  },
  unwrap: {
    synopsis: ["kout[] unwrap kin[] "],
    id: "unwrap",
    type: "opcode",
  },
  upsamp: {synopsis: ["ares upsamp ksig"], id: "upsamp", type: "opcode"},
  urandom: {
    synopsis: [
      "ax urandom [imin, imax]",
      "ix urandom [imin, imax]",
      "kx urandom [imin, imax]",
    ],
    id: "urandom",
    type: "opcode",
  },
  urd: {
    synopsis: [
      "aout = urd(ktableNum)",
      "iout = urd(itableNum)",
      "kout = urd(ktableNum)",
    ],
    id: "urd",
    type: "opcode",
  },
  vactrol: {
    synopsis: ["ares vactrol asig [iup, idown]"],
    id: "vactrol",
    type: "opcode",
  },
  vadd: {
    synopsis: ["vadd ifn, kval, kelements [, kdstoffset] [, kverbose]"],
    id: "vadd",
    type: "opcode",
  },
  vadd_i: {
    synopsis: ["vadd_i ifn, ival, ielements [, idstoffset]"],
    id: "vadd_i",
    type: "opcode",
  },
  vaddv: {
    synopsis: [
      "vaddv ifn1, ifn2, kelements [, kdstoffset] [, ksrcoffset] [,kverbose]",
    ],
    id: "vaddv",
    type: "opcode",
  },
  vaddv_i: {
    synopsis: ["vaddv_i ifn1, ifn2, ielements [, idstoffset] [, isrcoffset]"],
    id: "vaddv_i",
    type: "opcode",
  },
  vaget: {
    synopsis: ["kval vaget kndx, avar"],
    id: "vaget",
    type: "opcode",
  },
  valpass: {
    synopsis: ["ares valpass asig, krvt, xlpt, imaxlpt [, iskip] [, insmps]"],
    id: "valpass",
    type: "opcode",
  },
  vaset: {
    synopsis: ["vaset kval, kndx, avar"],
    id: "vaset",
    type: "opcode",
  },
  vbap: {
    synopsis: [
      "ar1[, ar2...] vbap asig, kazim [, kelev] [, kspread] [, ilayout]",
      "array[] vbap asig, kazim [, kelev] [, kspread] [, ilayout]",
    ],
    id: "vbap",
    type: "opcode",
  },
  vbap16: {
    synopsis: ["ar1, ..., ar16 vbap16 asig, kazim [, kelev] [, kspread]"],
    id: "vbap16",
    type: "opcode",
  },
  vbap16move: {
    synopsis: [
      "ar1, ..., ar16 vbap16move asig, idur, ispread, ifldnum, ifld1 [, ifld2] [...]",
    ],
    id: "vbap16move",
    type: "opcode",
  },
  vbap4: {
    synopsis: ["ar1, ar2, ar3, ar4 vbap4 asig, kazim [, kelev] [, kspread]"],
    id: "vbap4",
    type: "opcode",
  },
  vbap4move: {
    synopsis: [
      "ar1, ar2, ar3, ar4 vbap4move asig, idur, ispread, ifldnum, ifld1 [, ifld2] [...]",
    ],
    id: "vbap4move",
    type: "opcode",
  },
  vbap8: {
    synopsis: ["ar1, ..., ar8 vbap8 asig, kazim [, kelev] [, kspread]"],
    id: "vbap8",
    type: "opcode",
  },
  vbap8move: {
    synopsis: [
      "ar1, ..., ar8 vbap8move asig, idur, ispread, ifldnum, ifld1 [, ifld2] [...]",
    ],
    id: "vbap8move",
    type: "opcode",
  },
  vbapg: {
    synopsis: [
      "k1[, k2...] vbapg kazim [,kelev] [, kspread] [, ilayout]",
      "karray[] vbapg kazim [,kelev] [, kspread] [, ilayout]",
    ],
    id: "vbapg",
    type: "opcode",
  },
  vbapgmove: {
    synopsis: [
      "kr1[, kr2...] vbapgmove idur, ispread, ifldnum, ifld1 [, ifld2] [...]",
      "karray[] vbapgmove idur, ispread, ifldnum, ifld1 [, ifld2] [...]",
    ],
    id: "vbapgmove",
    type: "opcode",
  },
  vbaplsinit: {
    synopsis: [
      "vbaplsinit idim, ilsnum [, idir1] [, idir2] [...] [, idir32]",
      "vbaplsinit idim, ilsnum, ilsarray",
    ],
    id: "vbaplsinit",
    type: "opcode",
  },
  vbapmove: {
    synopsis: [
      "ar1[, ar2...] vbapmove asig, idur, ispread, ifldnum, ifld1 [, ifld2] [...]",
      "aarray[] vbapmove asig, idur, ispread, ifldnum, ifld1 [, ifld2] [...]",
    ],
    id: "vbapmove",
    type: "opcode",
  },
  vbapz: {
    synopsis: ["vbapz inumchnls, istartndx, asig, kazim [, kelev] [, kspread]"],
    id: "vbapz",
    type: "opcode",
  },
  vbapzmove: {
    synopsis: [
      "vbapzmove inumchnls, istartndx, asig, idur, ispread, ifldnum, ifld1, ifld2, [...]",
    ],
    id: "vbapzmove",
    type: "opcode",
  },
  vcella: {
    synopsis: [
      "vcella ktrig, kreinit, ioutFunc, initStateFunc, iRuleFunc, ielements, irulelen [, iradius]",
    ],
    id: "vcella",
    type: "opcode",
  },
  vco: {
    synopsis: [
      "ares vco xamp, xcps, iwave, kpw [, ifn] [, imaxd] [, ileak] [, inyx] [, iphs] [, iskip]",
    ],
    id: "vco",
    type: "opcode",
  },
  vco2: {
    synopsis: ["ares vco2 kamp, kcps [, imode] [, kpw] [, kphs] [, inyx]"],
    id: "vco2",
    type: "opcode",
  },
  vco2ft: {
    synopsis: ["kfn vco2ft kcps, iwave [, inyx]"],
    id: "vco2ft",
    type: "opcode",
  },
  vco2ift: {
    synopsis: ["ifn vco2ift icps, iwave [, inyx]"],
    id: "vco2ift",
    type: "opcode",
  },
  vco2init: {
    synopsis: [
      "ifn vco2init iwave [, ibasfn] [, ipmul] [, iminsiz] [, imaxsiz] [, isrcft]",
    ],
    id: "vco2init",
    type: "opcode",
  },
  vcomb: {
    synopsis: ["ares vcomb asig, krvt, xlpt, imaxlpt [, iskip] [, insmps]"],
    id: "vcomb",
    type: "opcode",
  },
  vcopy: {
    synopsis: ["vcopy_i ifn1, ifn2, ielements [,idstoffset, isrcoffset]"],
    id: "vcopy_i",
    type: "opcode",
  },
  vdelay: {
    synopsis: ["ares vdelay asig, adel, imaxdel [, iskip]"],
    id: "vdelay",
    type: "opcode",
  },
  vdelay3: {
    synopsis: ["ares vdelay3 asig, adel, imaxdel [, iskip]"],
    id: "vdelay3",
    type: "opcode",
  },
  vdelayk: {
    synopsis: ["kout vdelayk ksig, kdel, imaxdel [, iskip, imode]"],
    id: "vdelayk",
    type: "opcode",
  },
  vdelayx: {
    synopsis: ["aout vdelayx ain, adl, imd, iws [, ist]"],
    id: "vdelayx",
    type: "opcode",
  },
  vdelayxq: {
    synopsis: [
      "aout1, aout2, aout3, aout4 vdelayxq ain1, ain2, ain3, ain4, adl, imd, iws [, ist]",
    ],
    id: "vdelayxq",
    type: "opcode",
  },
  vdelayxs: {
    synopsis: ["aout1, aout2 vdelayxs ain1, ain2, adl, imd, iws [, ist]"],
    id: "vdelayxs",
    type: "opcode",
  },
  vdelayxw: {
    synopsis: ["aout vdelayxw ain, adl, imd, iws [, ist]"],
    id: "vdelayxw",
    type: "opcode",
  },
  vdelayxwq: {
    synopsis: [
      "aout1, aout2, aout3, aout4 vdelayxwq ain1, ain2, ain3, ain4, adl, imd, iws [, ist]",
    ],
    id: "vdelayxwq",
    type: "opcode",
  },
  vdelayxws: {
    synopsis: ["aout1, aout2 vdelayxws ain1, ain2, adl, imd, iws [, ist]"],
    id: "vdelayxws",
    type: "opcode",
  },
  vdivv: {
    synopsis: [
      "vdivv ifn1, ifn2, kelements [, kdstoffset] [, ksrcoffset] [,kverbose]",
    ],
    id: "vdivv",
    type: "opcode",
  },
  vdivv_i: {
    synopsis: ["vdivv_i ifn1, ifn2, ielements [, idstoffset] [, isrcoffset]"],
    id: "vdivv_i",
    type: "opcode",
  },
  vecdelay: {
    synopsis: ["vecdelay ifn, ifnIn, ifnDel, ielements, imaxdel [, iskip]"],
    id: "vecdelay",
    type: "opcode",
  },
  veloc: {
    synopsis: ["ival veloc [ilow] [, ihigh]"],
    id: "veloc",
    type: "opcode",
  },
  vexp: {
    synopsis: ["vexp ifn, kval, kelements [, kdstoffset] [, kverbose]"],
    id: "vexp",
    type: "opcode",
  },
  vexp_i: {
    synopsis: ["vexp_i ifn, ival, ielements[, idstoffset]"],
    id: "vexp_i",
    type: "opcode",
  },
  vexpseg: {
    synopsis: [
      "vexpseg ifnout, ielements, ifn1, idur1, ifn2 [, idur2, ifn3 [...]]",
    ],
    id: "vexpseg",
    type: "opcode",
  },
  vexpv: {
    synopsis: [
      "vexpv ifn1, ifn2, kelements [, kdstoffset] [, ksrcoffset] [,kverbose]",
    ],
    id: "vexpv",
    type: "opcode",
  },
  vexpv_i: {
    synopsis: ["vexpv_i ifn1, ifn2, ielements [, idstoffset] [, isrcoffset]"],
    id: "vexpv_i",
    type: "opcode",
  },
  vibes: {
    synopsis: [
      "ares vibes kamp, kfreq, ihrd, ipos, imp, kvibf, kvamp, ivibfn, idec",
    ],
    id: "vibes",
    type: "opcode",
  },
  vibr: {
    synopsis: ["kout vibr kAverageAmp, kAverageFreq, ifn"],
    id: "vibr",
    type: "opcode",
  },
  vibrato: {
    synopsis: [
      "kout vibrato kAverageAmp, kAverageFreq, kRandAmountAmp, kRandAmountFreq, kAmpMinRate, kAmpMaxRate, kcpsMinRate, kcpsMaxRate, ifn [, iphs",
    ],
    id: "vibrato",
    type: "opcode",
  },
  vincr: {synopsis: ["vincr accum, aincr"], id: "vincr", type: "opcode"},
  vlimit: {
    synopsis: ["vlimit ifn, kmin, kmax, ielements"],
    id: "vlimit",
    type: "opcode",
  },
  vlinseg: {
    synopsis: [
      "vlinseg ifnout, ielements, ifn1, idur1, ifn2 [, idur2, ifn3 [...]]",
    ],
    id: "vlinseg",
    type: "opcode",
  },
  vlowres: {
    synopsis: ["ares vlowres asig, kfco, kres, iord, ksep"],
    id: "vlowres",
    type: "opcode",
  },
  vmap: {
    synopsis: ["vmap ifn1, ifn2, ielements [,idstoffset, isrcoffset]"],
    id: "vmap",
    type: "opcode",
  },
  vmirror: {
    synopsis: ["vmirror ifn, kmin, kmax, ielements"],
    id: "vmirror",
    type: "opcode",
  },
  vmult: {
    synopsis: ["vmult ifn, kval, kelements [, kdstoffset] [, kverbose]"],
    id: "vmult",
    type: "opcode",
  },
  vmult_i: {
    synopsis: ["vmult_i ifn, ival, ielements [, idstoffset]"],
    id: "vmult_i",
    type: "opcode",
  },
  vmultv: {
    synopsis: [
      "vmultv ifn1, ifn2, kelements [, kdstoffset] [, ksrcoffset] [,kverbose]",
    ],
    id: "vmultv",
    type: "opcode",
  },
  vmultv_i: {
    synopsis: ["vmultv_i ifn1, ifn2, ielements [, idstoffset] [, isrcoffset]"],
    id: "vmultv_i",
    type: "opcode",
  },
  voice: {
    synopsis: [
      "ares voice kamp, kfreq, kphoneme, kform, kvibf, kvamp, ifn, ivfn",
    ],
    id: "voice",
    type: "opcode",
  },
  vosim: {
    synopsis: [
      "ar vosim kamp, kFund, kForm, kDecay, kPulseCount, kPulseFactor, ifn [, iskip]",
    ],
    id: "vosim",
    type: "opcode",
  },
  vphaseseg: {
    synopsis: [
      "vphaseseg kphase, ioutab, ielems, itab1,idist1,itab2 [,idist2,itab3, ... ,idistN-1,itabN]",
    ],
    id: "vphaseseg",
    type: "opcode",
  },
  vport: {
    synopsis: ["vport ifn, khtime, ielements [, ifnInit]"],
    id: "vport",
    type: "opcode",
  },
  vpow: {
    synopsis: ["vpow ifn, kval, kelements [, kdstoffset] [, kverbose]"],
    id: "vpow",
    type: "opcode",
  },
  vpow_i: {
    synopsis: ["vpow_i ifn, ival, ielements [, idstoffset]"],
    id: "vpow_i",
    type: "opcode",
  },
  vpowv: {
    synopsis: [
      "vpowv ifn1, ifn2, kelements [, kdstoffset] [, ksrcoffset] [,kverbose]",
    ],
    id: "vpowv",
    type: "opcode",
  },
  vpowv_i: {
    synopsis: ["vpowv_i ifn1, ifn2, ielements [, idstoffset] [, isrcoffset]"],
    id: "vpowv_i",
    type: "opcode",
  },
  vps: {synopsis: ["avp vps aph,kd,kv"], id: "vps", type: "opcode"},
  vpvoc: {
    synopsis: ["ares vpvoc ktimpnt, kfmod, ifile [, ispecwp] [, ifn]"],
    id: "vpvoc",
    type: "opcode",
  },
  vrandh: {
    synopsis: [
      "vrandh ifn, krange, kcps, ielements [, idstoffset] [, iseed] [, isize] [, ioffset]",
    ],
    id: "vrandh",
    type: "opcode",
  },
  vrandi: {
    synopsis: [
      "vrandi ifn, krange, kcps, ielements [, idstoffset] [, iseed] [, isize] [, ioffset]",
    ],
    id: "vrandi",
    type: "opcode",
  },
  vsubv: {
    synopsis: [
      "vsubv ifn1, ifn2, kelements [, kdstoffset] [, ksrcoffset] [,kverbose]",
    ],
    id: "vsubv",
    type: "opcode",
  },
  vsubv_i: {
    synopsis: ["vsubv_i ifn1, ifn2, ielements [, idstoffset] [, isrcoffset]"],
    id: "vsubv_i",
    type: "opcode",
  },
  vtaba: {
    synopsis: ["vtaba andx, ifn, aout1 [, aout2, aout3, .... , aoutN ]"],
    id: "vtaba",
    type: "opcode",
  },
  vtabi: {
    synopsis: ["vtabi indx, ifn, iout1 [, iout2, iout3, .... , ioutN ]"],
    id: "vtabi",
    type: "opcode",
  },
  vtabk: {
    synopsis: ["vtabk kndx, ifn, kout1 [, kout2, kout3, .... , koutN ]"],
    id: "vtabk",
    type: "opcode",
  },
  vtable1k: {
    synopsis: ["vtable1k kfn,kout1 [, kout2, kout3, .... , koutN ]"],
    id: "vtable1k",
    type: "opcode",
  },
  vtablea: {
    synopsis: [
      "vtablea andx, kfn, kinterp, ixmode, aout1 [, aout2, aout3, .... , aoutN ]",
    ],
    id: "vtablea",
    type: "opcode",
  },
  vtablei: {
    synopsis: [
      "vtablei indx, ifn, interp, ixmode, iout1 [, iout2, iout3, .... , ioutN ]",
    ],
    id: "vtablei",
    type: "opcode",
  },
  vtablek: {
    synopsis: [
      "vtablek kndx, kfn, kinterp, ixmode, kout1 [, kout2, kout3, .... , koutN ]",
    ],
    id: "vtablek",
    type: "opcode",
  },
  vtablewa: {
    synopsis: [
      "vtablewa andx, kfn, ixmode, ainarg1 [, ainarg2, ainarg3 , .... , ainargN ]",
    ],
    id: "vtablewa",
    type: "opcode",
  },
  vtablewi: {
    synopsis: [
      "vtablewi indx, ifn, ixmode, inarg1 [, inarg2, inarg3 , .... , inargN ]",
    ],
    id: "vtablewi",
    type: "opcode",
  },
  vtablewk: {
    synopsis: [
      "vtablewk kndx, kfn, ixmode, kinarg1 [, kinarg2, kinarg3 , .... , kinargN ]",
    ],
    id: "vtablewk",
    type: "opcode",
  },
  vtabwa: {
    synopsis: [
      "vtabwa andx, ifn, ainarg1 [, ainarg2, ainarg3 , .... , ainargN ]",
    ],
    id: "vtabwa",
    type: "opcode",
  },
  vtabwi: {
    synopsis: ["vtabwi indx, ifn, inarg1 [, inarg2, inarg3 , .... , inargN ]"],
    id: "vtabwi",
    type: "opcode",
  },
  vtabwk: {
    synopsis: [
      "vtabwk kndx, ifn, kinarg1 [, kinarg2, kinarg3 , .... , kinargN ]",
    ],
    id: "vtabwk",
    type: "opcode",
  },
  vwrap: {
    synopsis: ["vwrap ifn, kmin, kmax, ielements"],
    id: "vwrap",
    type: "opcode",
  },
  waveset: {
    synopsis: ["ares waveset ain, krep [, ilen]"],
    id: "waveset",
    type: "opcode",
  },
  websocket: {
    synopsis: ["xout1[, xout2, xout3, ..., xoutN] websocket iport, xin"],
    id: "websocket",
    type: "opcode",
  },
  weibull: {
    synopsis: [
      "ares weibull ksigma, ktau",
      "ires weibull ksigma, ktau",
      "kres weibull ksigma, ktau",
    ],
    id: "weibull",
    type: "opcode",
  },
  wgbow: {
    synopsis: [
      "ares wgbow kamp, kfreq, kpres, krat, kvibf, kvamp [, ifn] [, iminfreq]",
    ],
    id: "wgbow",
    type: "opcode",
  },
  wgbowedbar: {
    synopsis: [
      "ares wgbowedbar kamp, kfreq, kpos, kbowpres, kgain [, iconst] [, itvel] [, ibowpos] [, ilow]",
    ],
    id: "wgbowedbar",
    type: "opcode",
  },
  wgbrass: {
    synopsis: [
      "ares wgbrass kamp, kfreq, ktens, iatt, kvibf, kvamp [, ifn] [, iminfreq]",
    ],
    id: "wgbrass",
    type: "opcode",
  },
  wgclar: {
    synopsis: [
      "ares wgclar kamp, kfreq, kstiff, iatt, idetk, kngain, kvibf, kvamp [, ifn] [, iminfreq]",
    ],
    id: "wgclar",
    type: "opcode",
  },
  wgflute: {
    synopsis: [
      "ares wgflute kamp, kfreq, kjet, iatt, idetk, kngain, kvibf, kvamp [, ifn] [, iminfreq] [, ijetrf] [, iendrf]",
    ],
    id: "wgflute",
    type: "opcode",
  },
  wgpluck: {
    synopsis: ["ares wgpluck icps, iamp, kpick, iplk, idamp, ifilt, axcite"],
    id: "wgpluck",
    type: "opcode",
  },
  wgpluck2: {
    synopsis: ["ares wgpluck2 iplk, kamp, icps, kpick, krefl"],
    id: "wgpluck2",
    type: "opcode",
  },
  wguide1: {
    synopsis: ["ares wguide1 asig, xfreq, kcutoff, kfeedback"],
    id: "wguide1",
    type: "opcode",
  },
  wguide2: {
    synopsis: [
      "ares wguide2 asig, xfreq1, xfreq2, kcutoff1, kcutoff2, kfeedback1, kfeedback2",
    ],
    id: "wguide2",
    type: "opcode",
  },
  while: {
    synopsis: ["while condition do ... od"],
    id: "while",
    type: "opcode",
  },
  wiiconnect: {
    synopsis: ["ires wiiconnect [itimeout, imaxnum]"],
    id: "wiiconnect",
    type: "opcode",
  },
  wiidata: {
    synopsis: ["kres wiidata kcontrol[, knum]"],
    id: "wiidata",
    type: "opcode",
  },
  wiirange: {
    synopsis: [" wiirange icontrol, iminimum, imaximum[, inum]"],
    id: "wiirange",
    type: "opcode",
  },
  wiisend: {
    synopsis: ["kres wiisend kcontrol, kvalue[, knum]"],
    id: "wiisend",
    type: "opcode",
  },
  window: {
    synopsis: ["kout[] window kin[][, koff, itype]"],
    id: "window",
    type: "opcode",
  },
  wrap: {
    synopsis: [
      "ares wrap asig, klow, khigh",
      "ires wrap isig, ilow, ihigh",
      "kres wrap ksig, klow, khigh",
    ],
    id: "wrap",
    type: "opcode",
  },
  writescratch: {
    synopsis: ["writescratchival[, index]"],
    id: "writescratch",
    type: "opcode",
  },
  wterrain: {
    synopsis: [
      "aout wterrain kamp, kpch, k_xcenter, k_ycenter, k_xradius, k_yradius, itabx, itaby",
    ],
    id: "wterrain",
    type: "opcode",
  },
  wterrain2: {
    synopsis: [
      "aout wterrain2 kamp, kcps, kx, ky, krx, kry, krot, ktab0, ktab1, kcurve, kcurveparam ",
    ],
    id: "wterrain2",
    type: "opcode",
  },
  xadsr: {
    synopsis: [
      "ares xadsr iatt, idec, islev, irel [, idel]",
      "kres xadsr iatt, idec, islev, irel [, idel]",
    ],
    id: "xadsr",
    type: "opcode",
  },
  xin: {
    synopsis: ["xinarg1 [, xinarg2] ... [xinargN] xin"],
    id: "xin",
    type: "opcode",
  },
  xout: {
    synopsis: ["xout xoutarg1 [, xoutarg2] ... [, xoutargN]"],
    id: "xout",
    type: "opcode",
  },
  xscanmap: {
    synopsis: ["kpos, kvel xscanmap iscan, kamp, kvamp [, iwhich]"],
    id: "xscanmap",
    type: "opcode",
  },
  xscans: {
    synopsis: ["ares xscans kamp, kfreq, ifntraj, id [, iorder]"],
    id: "xscans",
    type: "opcode",
  },
  xscansmap: {
    synopsis: ["xscansmap kpos, kvel, iscan, kamp, kvamp [, iwhich]"],
    id: "xscansmap",
    type: "opcode",
  },
  xscanu: {
    synopsis: [
      "xscanu init, irate, ifnvel, ifnmass, ifnstif, ifncentr, ifndamp, kmass, kstif, kcentr, kdamp, ileft, iright, kpos, kstrngth, ain, idisp, id",
    ],
    id: "xscanu",
    type: "opcode",
  },
  xtratim: {synopsis: ["xtratim iextradur"], id: "xtratim", type: "opcode"},
  xyin: {
    synopsis: [
      "kx, ky xyin iprd, ixmin, ixmax, iymin, iymax [, ixinit] [, iyinit]",
    ],
    id: "xyin",
    type: "opcode",
  },
  xyscale: {
    synopsis: ["kout xyscale kx, ky, k00, k10, k01, k11"],
    id: "xyscale",
    type: "opcode",
  },
  zacl: {synopsis: ["zacl kfirst [, klast]"], id: "zacl", type: "opcode"},
  zakinit: {
    synopsis: ["zakinit isizea, isizek"],
    id: "zakinit",
    type: "opcode",
  },
  zamod: {
    synopsis: ["ares zamod asig, kzamod"],
    id: "zamod",
    type: "opcode",
  },
  zar: {synopsis: ["ares zar kndx"], id: "zar", type: "opcode"},
  zarg: {synopsis: ["ares zarg kndx, kgain"], id: "zarg", type: "opcode"},
  zaw: {synopsis: ["zaw asig, kndx"], id: "zaw", type: "opcode"},
  zawm: {
    synopsis: ["zawm asig, kndx [, imix]"],
    id: "zawm",
    type: "opcode",
  },
  zdf_1pole: {
    synopsis: ["asig zdf_1pole ain, xcf [, kmode, istor]"],
    id: "zdf_1pole",
    type: "opcode",
  },
  zdf_1pole_mode: {
    synopsis: ["alp, ahp zdf_1pole_mode ain, xcf [, istor]"],
    id: "zdf_1pole_mode",
    type: "opcode",
  },
  zdf_2pole: {
    synopsis: ["asig zdf_2pole ain, xcf, xQ [, kmode, istor]"],
    id: "zdf_2pole",
    type: "opcode",
  },
  zdf_2pole_mode: {
    synopsis: ["alp, abp, ahp zdf_2pole_mode ain, xcf, Q [, istor]"],
    id: "zdf_2pole_mode",
    type: "opcode",
  },
  zdf_ladder: {
    synopsis: ["asig zdf_ladder ain, xcf, xQ [, istor]"],
    id: "zdf_ladder",
    type: "opcode",
  },
  zfilter2: {
    synopsis: [
      "ares zfilter2 asig, kdamp, kfreq, iM, iN, ib0, ib1, ..., ibM, ia1,ia2, ..., iaN",
    ],
    id: "zfilter2",
    type: "opcode",
  },
  zir: {synopsis: ["ir zir indx"], id: "zir", type: "opcode"},
  ziw: {synopsis: ["ziw isig, indx"], id: "ziw", type: "opcode"},
  ziwm: {
    synopsis: ["ziwm isig, indx [, imix]"],
    id: "ziwm",
    type: "opcode",
  },
  zkcl: {synopsis: ["zkcl kfirst, klast"], id: "zkcl", type: "opcode"},
  zkmod: {
    synopsis: ["kres zkmod ksig, kzkmod"],
    id: "zkmod",
    type: "opcode",
  },
  zkr: {synopsis: ["kres zkr kndx"], id: "zkr", type: "opcode"},
  zkw: {synopsis: ["zkw kval, kndx"], id: "zkw", type: "opcode"},
};
