class Drobi {
  constructor(chislitel, znamenatel) {
    this.chislitel = chislitel;
    this.znamenatel = znamenatel;
  }
  Umnojeniye(mnojitel) {
    let r_chis = this.chislitel * mnojitel.chislitel;
    let r_znam = this.znamenatel * mnojitel.znamenatel;
    return new Drobi(r_chis, r_znam);
  }

  nod(a, b) {
    return b === 0 ? a : this.nod(b, a % b);
  }
  sokr() {
    let sokratitel = this.nod(this.chislitel, this.znamenatel);
    return new Drobi(this.chislitel / sokratitel, this.znamenatel / sokratitel);
  }

  Slojeniye(slojitel) {
    let r_chis = 0;
    let r_znam = 0;
    if (this.znamenatel == slojitel.znamenatel) {
      r_znam = this.znamenatel;
      r_chis = this.chislitel + slojitel.chislitel;
    } else {
      r_znam = this.znamenatel * slojitel.znamenatel;
      r_chis =
        this.chislitel * slojitel.znamenatel +
        slojitel.chislitel * this.znamenatel;
    }
    return new Drobi(r_chis, r_znam).sokr();
  }

  Vichitaniye(raznost) {
    let r_chis = this.chislitel - raznost.chislitel;
    let r_znam = this.znamenatel - raznost.znamenatel;
    return new Drobi(r_chis, r_znam);
  }
}

let num1 = new Drobi(1, 3);
let num2 = new Drobi(2, 3);

let Slojeniye = num1.Slojeniye(num2);
let Umnojeniye = num1.Umnojeniye(num2);
let Vichitaniye = num1.Vichitaniye(num2);

alert(
  `slojeniye dvux drobey ${num1.chislitel}/${num1.znamenatel} + ${num2.chislitel}/${num2.znamenatel}= ${Slojeniye.chislitel}/${Slojeniye.znamenatel}`
);
alert(
  `umnojeniye dvux drobey ${num1.chislitel}/${num1.znamenatel} * ${num2.chislitel}/${num2.znamenatel}=${Umnojeniye.chislitel}/${Umnojeniye.znamenatel}`
);
alert(
  `raznost dvux drobey ${num1.chislitel}/${num1.znamenatel} - ${num2.chislitel}/${num2.znamenatel}= ${Vichitaniye.chislitel}/${Vichitaniye.znamenatel}`
);
