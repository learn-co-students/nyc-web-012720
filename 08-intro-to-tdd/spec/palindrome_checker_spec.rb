require_relative '../lib/palindrome_checker'

RSpec.describe PalindromeChecker do 
  describe '#check' do
    let(:checker) { PalindromeChecker.new }

    it 'returns true when given a palindrome' do
      word = 'racecar'

      result = checker.check(word)
      
      expect(result).to be true
    end

    it 'returns false when not given a palidrome' do
      word = 'not_a_palindrome'

      result = checker.check(word)

      expect(result).to be false
    end

    it 'returns true when given a palindrome with spaces' do
      word = 'taco cat'

      result = checker.check(word)

      expect(result).to be true
    end

    it 'returns true when given a palindrome of mixed case' do
      word = 'NeverOddOrEven'

      result = checker.check(word)

      expect(result).to be true
    end

    xit 'returns true when given a palindrome in snake case'
    xit 'other thing'
    xit 'something else'
  end

end