export class InitGame {
  static readonly type = '[Game] InitGame';
}

export class StartGame {
  static readonly type = '[Game] StartGame';
  constructor(public name: string) {}
}

export class Play {
  static readonly type = '[Game] Play]';
  constructor(public readonly input: string) {}
}
