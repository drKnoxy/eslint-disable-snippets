# eslint-disable-snippets

This extensions contains basic snippets for block ignoring a specific rule, the next line, or the
current line.

1. Start typing `eslint-disable` in a javascript, javascriptreact, or jsx file to trigger the snippet autocomplete.
1. Type the rule you want to disable or leave empty to disable all rules.
1. Press `tab` to drop your cursor at a helpful position.
1. Press `option+↓` to move the current line down. This is useful if you are wrapping a block of
code.

![Block disable in use](/images/disable-block.gif)

## Known Issues
* I'd love it if we could have like a suggest list of rules you've violated so you don't have to
  type out the crappy eslint name, ie. `no-return-assign` or `no-undef`. If you know how to make that
  happen PR it!

## Contributing
PRs are welcome, issues are not. This is open source software in the extent that you can read the source and install, not in the sense that I am a maintainer or owe you anything.