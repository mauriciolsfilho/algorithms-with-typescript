/**
 * @class Fibonacci
 *
 * Na matemática, a sucessão de Fibonacci, é uma sequência de números inteiros,
 * começando normalmente por 0 e 1, na qual cada termo subsequente corresponde à
 * soma dos dois anteriores.
 * @author mauriciolsfilho
 */
export class Fibonacci {
  private sequence: Array<number>;

  constructor() {
    this.sequence = [0, 1];
  }

  getSequence(length: number) {
    if (length < 0) {
      throw new Error("Invalid length");
    }

    if (length === 0) {
      return [];
    }

    for (let i = this.sequence.length; i < length; i++) {
      this.sequence.push(this.sequence[i - 1] + this.sequence[i - 2]);
    }

    return this.sequence;
  }
}
