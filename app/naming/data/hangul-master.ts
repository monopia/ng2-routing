export const consonants = [
  'ㄱ','ㄴ','ㄷ','ㄹ','ㅁ','ㅂ','ㅅ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'
];

export const mouths = [
    {
      value: '牙',
      consonant: [0, 10] // ㄱ ㅋ
    },
    {
      value: '舌',
      consonant: [1,2,3,11] // ㄴ ㄷ ㄹ ㅌ
    },
    {
      value: '喉',
      consonant: [7,13] // ㅇ ㅎ
    },
    {
      value: '齒',
      consonant: [6,8,9] // ㅅ ㅈ ㅊ
    },
    {
      value: '脣',
      consonant: [4,5,12] //ㅁ ㅂ ㅍ
    }
  ];

export const hangulMaster =
{
  'ㄱ': {
    mouth: 0,
    hanguls: {
      '가': { stroke: 3, surname: true },
      '각': { stroke: 4 },
      '간': { stroke: 4, surname: true },
      '갈': { stroke: 6, surname: true },
      '감': { stroke: 6, surname: true },
      '갑': { stroke: 7 },
      '강': { stroke: 4, surname: true },
      '개': { stroke: 4, surname: true },
      '객': { stroke: 5 },
      '갱': { stroke: 5 },
      '갹': { stroke: 5 },
      '거': { stroke: 3 },
      '건': { stroke: 4, surname: true },
      '걸': { stroke: 6 },
      '검': { stroke: 6 },
      '겁': { stroke: 7 },
      '게': { stroke: 4 },
      '격': { stroke: 5 },
      '견': { stroke: 5, surname: true },
      '결': { stroke: 7, surname: true },
      '겸': { stroke: 7 },
      '겹': { stroke: 8, surname: true },
      '경': { stroke: 5, surname: true },
      '계': { stroke: 5, surname: true },
      '고': { stroke: 3, surname: true },
      '곡': { stroke: 4, surname: true },
      '곤': { stroke: 4 },
      '골': { stroke: 6, surname: true },
      '공': { stroke: 4, surname: true },
      '곶': { stroke: 6 },
      '과': { stroke: 5, surname: true },
      '곽': { stroke: 6, surname: true },
      '관': { stroke: 6, surname: true },
      '괄': { stroke: 8 },
      '광': { stroke: 6, surname: true },
      '괘': { stroke: 6 },
      '괴': { stroke: 4, surname: true },
      '굉': { stroke: 5 },
      '교': { stroke: 4 },
      '구': { stroke: 3, surname: true },
      '국': { stroke: 4, surname: true },
      '군': { stroke: 4, surname: true },
      '굴': { stroke: 6 },
      '궁': { stroke: 4, surname: true },
      '궉': { stroke: 6, surname: true },
      '권': { stroke: 6, surname: true },
      '궐': { stroke: 8 },
      '궤': { stroke: 6 },
      '귀': { stroke: 4, surname: true },
      '규': { stroke: 4 },
      '균': { stroke: 5 },
      '귤': { stroke: 7 },
      '극': { stroke: 3, surname: true },
      '근': { stroke: 3, surname: true },
      '글': { stroke: 5 },
      '금': { stroke: 5, surname: true },
      '급': { stroke: 6 },
      '긍': { stroke: 3 },
      '기': { stroke: 2, surname: true },
      '긴': { stroke: 3 },
      '길': { stroke: 3, surname: true },
      '김': { stroke: 5, surname: true },
      '끽': { stroke: 4 }
    }
  },
  'ㄴ': {
    mouth: 1,
    hanguls: {
      '나': { stroke: 3, surname: true },
      '난': { stroke: 4 },
      '날': { stroke: 6 },
      '남': { stroke: 6, surname: true },
      '납': { stroke: 7 },
      '낭': { stroke: 4, surname: true },
      '내': { stroke: 4, surname: true },
      '년': { stroke: 5 },
      '념': { stroke: 7 },
      '녕': { stroke: 5, surname: true },
      '노': { stroke: 3, surname: true },
      '녹': { stroke: 4, surname: true },
      '농': { stroke: 4 },
      '뇌': { stroke: 4, surname: true },
      '뇨': { stroke: 4 },
      '눈': { stroke: 4 },
      '눌': { stroke: 6 },
      '뉴': { stroke: 4 },
      '능': { stroke: 3, surname: true},
      '니': { stroke: 2 },
      '닉': { stroke: 3 }
    }
  },
  'ㄷ': {
    mouth: 1,
    hanguls: {
      '다': { stroke: 4 },
      '단': { stroke: 5, surname: true },
      '달': { stroke: 7 },
      '담': { stroke: 7 },
      '답': { stroke: 8 },
      '당': { stroke: 5, surname: true },
      '대': { stroke: 5, surname: true },
      '덕': { stroke: 5, surname: true },
      '도': { stroke: 4, surname: true },
      '독': { stroke: 5 },
      '돈': { stroke: 5, surname: true },
      '돌': { stroke: 7 },
      '동': { stroke: 5, surname: true },
      '두': { stroke: 4, surname: true },
      '둔': { stroke: 5 },
      '둘': { stroke: 7 },
      '등': { stroke: 4, surname: true }
    }
  },
  'ㄹ': {
    mouth: 1,
    hanguls: {
      '라': { stroke: 5 },
      '락': { stroke: 6 },
      '란': { stroke: 6 },
      '랄': { stroke: 8 },
      '람': { stroke: 8 },
      '랍': { stroke: 9 },
      '랑': { stroke: 6 },
      '래': { stroke: 6 },
      '략': { stroke: 7 },
      '량': { stroke: 7 },
      '려': { stroke: 6 },
      '력': { stroke: 7 },
      '련': { stroke: 7 },
      '렬': { stroke: 9 },
      '렴': { stroke: 9 },
      '렵': { stroke: 10 },
      '령': { stroke: 7 },
      '례': { stroke: 7 },
      '로': { stroke: 5 },
      '록': { stroke: 6 },
      '롱': { stroke: 6 },
      '뢰': { stroke: 6 },
      '료': { stroke: 6 },
      '룡': { stroke: 7 },
      '루': { stroke: 5 },
      '류': { stroke: 6 },
      '륙': { stroke: 7 },
      '륜': { stroke: 7 },
      '률': { stroke: 9 },
      '륭': { stroke: 7 },
      '륵': { stroke: 5 },
      '름': { stroke: 7 },
      '릉': { stroke: 5 },
      '리': { stroke: 4 },
      '린': { stroke: 5 },
      '림': { stroke: 7 },
      '립': { stroke: 8 }
    }
  },
  'ㅁ': {
    mouth: 4,
    hanguls: {
      '마': { stroke: 5, surname: true },
      '막': { stroke: 6 },
      '만': { stroke: 6, surname: true },
      '말': { stroke: 8 },
      '망': { stroke: 6 },
      '매': { stroke: 6, surname: true },
      '맥': { stroke: 7 },
      '맹': { stroke: 7, surname: true },
      '멱': { stroke: 7 },
      '면': { stroke: 7 },
      '멸': { stroke: 9 },
      '명': { stroke: 7, surname: true },
      '몌': { stroke: 7 },
      '모': { stroke: 5, surname: true },
      '목': { stroke: 6, surname: true },
      '몰': { stroke: 8 },
      '몽': { stroke: 6, surname: true },
      '묘': { stroke: 6 },
      '무': { stroke: 5 },
      '묵': { stroke: 6, surname: true },
      '문': { stroke: 6, surname: true },
      '물': { stroke: 8, surname: true },
      '미': { stroke: 4, surname: true },
      '민': { stroke: 5, surname: true },
      '밀': { stroke: 7 }
    }
  },
  'ㅂ': {
    mouth: 4,
    hanguls: {
      '박': { stroke: 7, surname: true },
      '반': { stroke: 7, surname: true },
      '발': { stroke: 9 },
      '방': { stroke: 7, surname: true },
      '배': { stroke: 7, surname: true },
      '백': { stroke: 8, surname: true },
      '번': { stroke: 7 },
      '벌': { stroke: 9 },
      '범': { stroke: 9, surname: true },
      '법': { stroke: 10 },
      '벽': { stroke: 8 },
      '변': { stroke: 8, surname: true },
      '별': { stroke: 10, surname: true },
      '병': { stroke: 8 },
      '보': { stroke: 6, surname: true },
      '복': { stroke: 7, surname: true },
      '볼': { stroke: 9 },
      '봉': { stroke: 7, surname: true },
      '부': { stroke: 6, surname: true },
      '북': { stroke: 7, surname: true },
      '분': { stroke: 7 },
      '불': { stroke: 9 },
      '붕': { stroke: 7 },
      '비': { stroke: 5, surname: true },
      '빈': { stroke: 6, surname: true },
      '빙': { stroke: 6, surname: true }
    }
  },
  'ㅅ': {
    mouth: 3,
    hanguls: {
      '사': { stroke: 4, surname: true },
      '삭': { stroke: 5 },
      '산': { stroke: 5, surname: true },
      '살': { stroke: 7 },
      '삼': { stroke: 7, surname: true },
      '삽': { stroke: 8 },
      '상': { stroke: 5 },
      '새': { stroke: 5 },
      '색': { stroke: 6, surname: true },
      '생': { stroke: 6 },
      '서': { stroke: 4, surname: true },
      '석': { stroke: 5, surname: true },
      '선': { stroke: 5, surname: true },
      '설': { stroke: 7, surname: true },
      '섬': { stroke: 7 },
      '섭': { stroke: 8, surname: true },
      '성': { stroke: 5, surname: true },
      '세': { stroke: 5 },
      '소': { stroke: 4, surname: true },
      '속': { stroke: 5 },
      '손': { stroke: 5, surname: true },
      '솔': { stroke: 7 },
      '송': { stroke: 5, surname: true },
      '쇄': { stroke: 7 },
      '쇠': { stroke: 5 },
      '수': { stroke: 4, surname: true },
      '숙': { stroke: 5 },
      '순': { stroke: 5, surname: true },
      '술': { stroke: 7 },
      '숭': { stroke: 5 },
      '쉬': { stroke: 5 },
      '슬': { stroke: 6 },
      '습': { stroke: 7 },
      '승': { stroke: 4, surname: true },
      '시': { stroke: 3, surname: true },
      '식': { stroke: 4 },
      '신': { stroke: 4, surname: true },
      '실': { stroke: 6, surname: true },
      '심': { stroke: 6, surname: true },
      '십': { stroke: 7 },
      '쌍': { stroke: 7, surname: true }
    }
  },
  'ㅇ': {
    mouth: 2,
    hanguls: {
      '아': { stroke: 3 },
      '악': { stroke: 4, surname: true },
      '안': { stroke: 4, surname: true },
      '알': { stroke: 6 },
      '암': { stroke: 6 },
      '압': { stroke: 7 },
      '앙': { stroke: 4, surname: true },
      '애': { stroke: 4, surname: true },
      '액': { stroke: 5 },
      '앵': { stroke: 5 },
      '야': { stroke: 4, surname: true },
      '약': { stroke: 5 },
      '양': { stroke: 5, surname: true },
      '어': { stroke: 3, surname: true },
      '억': { stroke: 4 },
      '언': { stroke: 4 },
      '얼': { stroke: 6 },
      '엄': { stroke: 6, surname: true },
      '업': { stroke: 7 },
      '엔': { stroke: 5 },
      '여': { stroke: 4, surname: true },
      '역': { stroke: 5, surname: true },
      '연': { stroke: 5, surname: true },
      '열': { stroke: 7 },
      '염': { stroke: 7, surname: true },
      '엽': { stroke: 8, surname: true },
      '영': { stroke: 5, surname: true },
      '예': { stroke: 5, surname: true },
      '오': { stroke: 3, surname: true },
      '옥': { stroke: 4, surname: true },
      '온': { stroke: 4, surname: true },
      '올': { stroke: 6 },
      '옹': { stroke: 4, surname: true },
      '와': { stroke: 5 },
      '완': { stroke: 6 },
      '왕': { stroke: 6, surname: true },
      '왜': { stroke: 6 },
      '외': { stroke: 4 },
      '요': { stroke: 4, surname: true },
      '욕': { stroke: 5 },
      '용': { stroke: 5, surname: true },
      '우': { stroke: 3, surname: true },
      '욱': { stroke: 4, surname: true },
      '운': { stroke: 4, surname: true },
      '울': { stroke: 6 },
      '웅': { stroke: 4 },
      '원': { stroke: 6, surname: true },
      '월': { stroke: 8 },
      '위': { stroke: 4, surname: true },
      '유': { stroke: 4, surname: true },
      '육': { stroke: 5, surname: true },
      '윤': { stroke: 5, surname: true },
      '율': { stroke: 7, surname: true },
      '융': { stroke: 5 },
      '은': { stroke: 3, surname: true },
      '을': { stroke: 5, surname: true },
      '음': { stroke: 5, surname: true },
      '읍': { stroke: 6 },
      '응': { stroke: 3 },
      '의': { stroke: 3 },
      '이': { stroke: 2, surname: true },
      '익': { stroke: 3, surname: true },
      '인': { stroke: 3, surname: true },
      '일': { stroke: 5, surname: true },
      '임': { stroke: 5, surname: true },
      '입': { stroke: 6 },
      '잉': { stroke: 3 }
    }
  },
  'ㅈ': {
    mouth: 3,
    hanguls: {
      '자': { stroke: 4, surname: true },
      '작': { stroke: 5 },
      '잔': { stroke: 5 },
      '잠': { stroke: 7 },
      '잡': { stroke: 8 },
      '장': { stroke: 5, surname: true },
      '재': { stroke: 5 },
      '쟁': { stroke: 6 },
      '저': { stroke: 4 },
      '적': { stroke: 5, surname: true },
      '전': { stroke: 5, surname: true },
      '절': { stroke: 7 },
      '점': { stroke: 7, surname: true },
      '접': { stroke: 8 },
      '정': { stroke: 5, surname: true },
      '제': { stroke: 5, surname: true },
      '조': { stroke: 4, surname: true },
      '족': { stroke: 5 },
      '존': { stroke: 5 },
      '졸': { stroke: 7 },
      '종': { stroke: 5, surname: true },
      '좌': { stroke: 6, surname: true },
      '주': { stroke: 4, surname: true },
      '죽': { stroke: 5 },
      '준': { stroke: 5, surname: true },
      '줄': { stroke: 7 },
      '중': { stroke: 5, surname: true },
      '즉': { stroke: 4, surname: true },
      '즐': { stroke: 6 },
      '즙': { stroke: 7 },
      '증': { stroke: 4, surname: true },
      '지': { stroke: 3, surname: true },
      '직': { stroke: 4, surname: true },
      '진': { stroke: 4, surname: true },
      '질': { stroke: 6 },
      '짐': { stroke: 6 },
      '집': { stroke: 7 },
      '징': { stroke: 4 }
    }
  },
  'ㅊ': {
    mouth: 3,
    hanguls: {
      '차': { stroke: 5, surname: true },
      '착': { stroke: 6 },
      '찬': { stroke: 6 },
      '찰': { stroke: 8 },
      '참': { stroke: 8 },
      '창': { stroke: 6, surname: true },
      '채': { stroke: 6, surname: true },
      '책': { stroke: 7, surname: true },
      '처': { stroke: 5 },
      '척': { stroke: 6, surname: true },
      '천': { stroke: 6, surname: true },
      '철': { stroke: 8 },
      '첨': { stroke: 8 },
      '첩': { stroke: 9 },
      '청': { stroke: 6 },
      '체': { stroke: 6 },
      '초': { stroke: 5, surname: true },
      '촉': { stroke: 6, surname: true },
      '촌': { stroke: 6 },
      '총': { stroke: 6 },
      '촬': { stroke: 10 },
      '최': { stroke: 6, surname: true },
      '추': { stroke: 5, surname: true },
      '축': { stroke: 6 },
      '춘': { stroke: 6 },
      '출': { stroke: 8 },
      '충': { stroke: 6, surname: true },
      '췌': { stroke: 8 },
      '취': { stroke: 6 },
      '측': { stroke: 5 },
      '치': { stroke: 4 },
      '칙': { stroke: 5 },
      '친': { stroke: 5 },
      '칠': { stroke: 7 },
      '침': { stroke: 7 },
      '칩': { stroke: 8 },
      '칭': { stroke: 5 }
    }
  },
  'ㅋ': {
    mouth: 0,
    hanguls: {
      '쾌': { stroke: 7 }
    }
  },
  'ㅌ': {
    mouth: 1,
    hanguls: {
      '타': { stroke: 5 },
      '탁': { stroke: 6, surname: true },
      '탄': { stroke: 6, surname: true },
      '탈': { stroke: 8 },
      '탐': { stroke: 8 },
      '탑': { stroke: 9 },
      '탕': { stroke: 6 },
      '태': { stroke: 6, surname: true },
      '택': { stroke: 7, surname: true },
      '탱': { stroke: 7 },
      '터': { stroke: 5 },
      '토': { stroke: 5 },
      '통': { stroke: 6 },
      '퇴': { stroke: 6 },
      '투': { stroke: 5 },
      '퉁': { stroke: 6 },
      '특': { stroke: 5 },
      '틈': { stroke: 7 }
    }
  },
  'ㅍ': {
    mouth: 4,
    hanguls: {
      '파': { stroke: 6, surname: true },
      '판': { stroke: 7, surname: true },
      '팔': { stroke: 9 },
      '패': { stroke: 7 },
      '팽': { stroke: 8, surname: true },
      '퍅': { stroke: 8 },
      '편': { stroke: 8, surname: true },
      '폄': { stroke: 10 },
      '평': { stroke: 8, surname: true },
      '폐': { stroke: 8 },
      '포': { stroke: 6, surname: true },
      '폭': { stroke: 7 },
      '표': { stroke: 7, surname: true },
      '품': { stroke: 9 },
      '풍': { stroke: 7, surname: true },
      '피': { stroke: 5, surname: true },
      '필': { stroke: 8, surname: true },
      '핍': { stroke: 9 }
    }
  },
  'ㅎ': {
    hanguls: {
      '하': { stroke: 5, surname: true },
      '학': { stroke: 6 },
      '한': { stroke: 6, surname: true },
      '할': { stroke: 8 },
      '함': { stroke: 8, surname: true },
      '합': { stroke: 9, surname: true },
      '항': { stroke: 6 },
      '해': { stroke: 6, surname: true },
      '핵': { stroke: 7 },
      '행': { stroke: 7, surname: true },
      '향': { stroke: 7, surname: true },
      '허': { stroke: 5, surname: true },
      '헌': { stroke: 6 },
      '헐': { stroke: 8 },
      '험': { stroke: 8 },
      '혁': { stroke: 7, surname: true },
      '현': { stroke: 7, surname: true },
      '혈': { stroke: 9 },
      '협': { stroke: 10, surname: true },
      '형': { stroke: 7, surname: true },
      '혜': { stroke: 7, surname: true },
      '호': { stroke: 5, surname: true },
      '혹': { stroke: 6 },
      '혼': { stroke: 6 },
      '홀': { stroke: 8 },
      '홍': { stroke: 6, surname: true },
      '화': { stroke: 7, surname: true },
      '확': { stroke: 8 },
      '환': { stroke: 8, surname: true },
      '활': { stroke: 10 },
      '황': { stroke: 8, surname: true },
      '회': { stroke: 6 },
      '획': { stroke: 7 },
      '횡': { stroke: 7 },
      '효': { stroke: 6, surname: true },
      '후': { stroke: 5, surname: true },
      '훈': { stroke: 6 },
      '훤': { stroke: 8 },
      '훼': { stroke: 8 },
      '휘': { stroke: 6 },
      '휴': { stroke: 6 },
      '휼': { stroke: 9 },
      '흉': { stroke: 7 },
      '흔': { stroke: 5, surname: true },
      '흘': { stroke: 7 },
      '흠': { stroke: 7 },
      '흡': { stroke: 8 },
      '희': { stroke: 5, surname: true },
      '힐': { stroke: 7 }
    }
  }
}