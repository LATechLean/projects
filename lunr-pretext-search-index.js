var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "shorttitlelowercase-3",
  "level": "1",
  "url": "shorttitlelowercase-3.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  Blake Farman    For the midterm project, you will work in a small group to formalize and prove a result in Lean. Below are two project options. Each project will require you to formalize precise definitions and prove supporting lemmas to complete a central proof.  Your project will be graded on correctness, clarity, Lean style, and collaboration. Choose one option and submit your choice by April 4.   "
},
{
  "id": "section-intro",
  "level": "1",
  "url": "section-intro.html",
  "type": "Section",
  "number": "1",
  "title": "Introduction",
  "body": " Introduction   For the midterm project, you will work in a small group to formalize and prove a result in Lean. Below are two project options. Each project will require you to formalize precise definitions and prove supporting lemmas to complete a central proof.  Your project will be graded on correctness, clarity, Lean style, and collaboration. Choose one option and submit your choice by April 4.   "
},
{
  "id": "sec-natural_numbers",
  "level": "1",
  "url": "sec-natural_numbers.html",
  "type": "Section",
  "number": "2",
  "title": "Constructing The Natural Numbers",
  "body": " Constructing The Natural Numbers   This project will guide you through some of the key portions of the construction of the natural numbers. Along the way, you will hone the following skills   Defining recursive functions,    Pattern matching on inductive types , and    Writing proofs by induction .   In the class GitHub repository , you will find a folder named projects and within it a file nat.lean that provides a code stub to get you started.    Definitions  You are given the following definition for addition   def add (m n : Nat) : Nat := match m with | zero => n | succ m => Nat.succ (add m n)   You will need to provide a recursive definition of multiplication def mul (m n : Nat) : Nat := sorry    As with addition, you must choose which slot to use in the match statement. The choice you make will determine how you structure your induction , and may require you to tweak the order of the statements below.     Basic Results  Once you have decided on a definition for multiplication, you should test your definition by proving the following familiar results:    theorem zero_mul (n: Nat) : zero * n = zero      theorem mul_zero (m : Nat) : m * zero = zero      theorem one_mul (n : Nat) : one * n = n      theorem mul_one (m : Nat) : m * one = m      theorem two_mul (n : Nat) : two * n = n + n      theorem mul_two (m : Nat) : m * two = m + m        Properties of Multiplication  Once you have established that your multiplication works for the simple examples above, you will prove the following general properties for multiplication.    theorem succ_mul (m n : Nat) : (succ m) * n = n + (m * n)      theorem mul_succ (m n : Nat) : m * (succ n) = m + m*n      theorem mul_comm (m n : Nat) : m * n = n * m      theorem distrib_right (m n k : Nat) : (m + n) * k = m*k + n*k      theorem distrib_left (m n k : Nat) : m * (n + k) = m * n + m * k      theorem mul_assoc (m n k : Nat) : (m * n) * k = m * (n * k)       "
},
{
  "id": "sec-natural_numbers-2-1",
  "level": "2",
  "url": "sec-natural_numbers.html#sec-natural_numbers-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "recursive inductive types induction "
},
{
  "id": "subsec-nat_definitions-5",
  "level": "2",
  "url": "sec-natural_numbers.html#subsec-nat_definitions-5",
  "type": "Warning",
  "number": "2.1",
  "title": "",
  "body": " As with addition, you must choose which slot to use in the match statement. The choice you make will determine how you structure your induction , and may require you to tweak the order of the statements below.  "
},
{
  "id": "sec-insertion_sort",
  "level": "1",
  "url": "sec-insertion_sort.html",
  "type": "Section",
  "number": "3",
  "title": "Insertion Sort",
  "body": " Insertion Sort   This project will guide you through some of the key portions of proving the correctness of the insertionSort algorithm. Along the way, you will hone the following skills   Defining recursive functions,    Pattern matching on inductive types , and    Writing proofs by induction .   In the class GitHub repository , you will find a folder named projects and within it a file insertionSort.lean that provides a code stub to get you started.    Definitions  You are given the following definition for sorted    inductive sorted {α : Type u} [LinearOrder α] : List α → Prop | nil : sorted nil | singleton (a : α) : sorted (cons a nil) | cons (a b : α) (as : List α) (a_le_b : a ≤ b) (h_sorted : sorted (cons b as)) : sorted (cons a (cons b as))   You will need to provide a definition of insert , def insert (x : α) (as : List α): List α     Basic Results  Once you have decided on a definition for insert, you should test your definition by proving the following basic results:    lemma insert_cons_le (x a : α) (as : List α) (h : x ≤ a) : insert x (cons a as) = cons x (cons a as)      lemma insert_cons_nle (x a : α) (as : List α) (h : ¬ (x ≤ a)) : insert x (cons a as) = cons a (insert x as)        Main Results  You will need to implement insertionSort  def insertionSort (as : List α) : List α recursively and then prove that actually sorts a list.    theorem insert_preserves_sorted (a : α) (as : List α) (h : sorted as) : sorted (insert a as)      theorem sort_sorts (as : List α) : sorted (insertionSort as)       "
},
{
  "id": "sec-insertion_sort-2-1",
  "level": "2",
  "url": "sec-insertion_sort.html#sec-insertion_sort-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "recursive inductive types induction "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
