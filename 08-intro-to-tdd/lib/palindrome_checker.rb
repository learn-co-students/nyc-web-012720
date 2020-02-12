class PalindromeChecker
  def check(word)
    new_word = word.gsub(' ', '').downcase
    new_word == new_word.reverse
  end
end