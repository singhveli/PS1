/*
Write a function that accepts two input parameters: a string, and a function. The function
should execute the passed function with the passed string and return the result.
Next, write two expressions that call this function. For the first, pass the string
‘supercalifragilisticexpialidocious’ and a lambda function that returns an array containing
fragments of the input string broken on the character ‘c’. For the input string
‘supercalifragilisticexpialidocious’, you should get
[‘super’, ‘califragilisti’, ‘cexpialido’, ‘cious’]
For the second, pass the string ‘supercalifragilisticexpialidocious’ and a lambda function that
replaces all of the ‘a’ characters with ‘A’ characters. Return an object that contains the original
string, the modified string, the total number of As in the modified string, and the overall length
of the modified string:
{
	 	 originalString: xxx,
	 	 modifiedString: xxx,
	 	 numberReplaced: xxx,
	 	 length:		 	 xxx
}
Print the data from the returned object on the console.
*/

const split_c = (str) => str.replace(/c/g, '*c').split('*');

const cap_A = (str) => {
    return {originalString: str, modifiedString: str.replace(/a/g, 'A'), numerReplaced: (str.split('a').length - 1), length: str.length};
};

const main = (str, callback) => {
    return callback(str);
};

console.log('Test on split_c:\n', main('supercalifragilisticexpialidocious', split_c));
console.log('Test on cap_A: \n', main('supercalifragilisticexpialidocious', cap_A));
