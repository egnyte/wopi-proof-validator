const wopiValidator = require('../src');
const assert = require('assert');

// example data copied from https://github.com/Microsoft/Office-Online-Test-Tools-and-Documentation/blob/master/samples/python/proof_keys/tests.py

let result;

result = wopiValidator.check(
    {
        url: "https://contoso.com/wopi/files/JIB9h+LJpZWBDwvoIiQ5p3115zJWDecpGF9aCm1vOa5UMllgC7w?access_token=RLoY%2f3D73%2fjwt6IQqR1wHqCEKDxRf2v0GPDa0ZHTlA6ik1%2fNBHDD6bHCI0BQrvacjNBL8ok%2fZsVPI%2beAIA5mHSOUbhW9ohowwD6Ljlwro2n5PkTBh6GEYi2afuCIQ8mjXAUdvEDg3um2GjJKtA%3d%3d",
        accessToken:  "RLoY%2f3D73%2fjwt6IQqR1wHqCEKDxRf2v0GPDa0ZHTlA6ik1%2fNBHDD6bHCI0BQrvacjNBL8ok%2fZsVPI%2beAIA5mHSOUbhW9ohowwD6Ljlwro2n5PkTBh6GEYi2afuCIQ8mjXAUdvEDg3um2GjJKtA%3d%3d",
        timestamp: '635655897361394523' //Too big for JavaScript numeric types
    },
    {
        proof: "x0IeSOjUQNH2pvjMPkP4Jotzs5Weeqms4AlPxMQ5CipssUJbyKFjLWnwPg1Ac0XtSTiPD177BmQ1+KtmYvDTWQ1FmBuvpvKZDSKzXoT6Qj4LCYYQ0TxnN/OT231+qd50sOD8zAxhfXP56qND9tj5xqoHMa+lbuvNCqiOBTZw5f/dklSK7Wgdx7ST3Dq6S9xxDUfsLC4Tjq+EsvcdSNIWL/W6NRZdyWqlgRgE6X8t/2iyyMypURdOW2Rztc6w/iYhbuh22Ul6Jfu14KaDo6YkvBr8iHlK4CcQST9i0u044y1Jnh34UK4EPdVRZrvTmeJ/5DFLWOqEwvBlW2bpoYF+9A==",
        proofold: "etYRI9UT6q8jA6PHMMmuGa8NbyIlbTHMHmJZqaCOh2GCpv7um2q7+7oaDFqAV/UP+2N85yZXvZgt9kTOUCwIdggUQVeJluNCwf1B5NsN/7n2aQF9LnWyYK8kK/3xvQKQrj4n24jk2MnHcX1tk8H/qLxq2DbPzi6ROoSgs2ZK8nmzhSPF74jnLCrwiwGgnVZV6gIhlAKCcUGtdrT60sgD/wpJGQQ0M59VDQhf1aDj5bUotf8RXovY8Gl0lpguvN4+EsEjpbVjdV9hxWs7c03JDdoz7mzFUWErSly9IzYXNfuFZMnSXpF3lGiprVJvW34Bu2gTo/cLq4LQoABkNCmd4g=="
    },
    {
        modulus:"0HOWUPFFgmSYHbLZZzdWO/HUOr8YNfx5NAl7GUytooHZ7B9QxQKTJpj0NIJ4XEskQW8e4dLzRrPbNOOJ+KpWHttXz8HoQXkkZV/gYNxaNHJ8/pRXGMZzfVM5vchhx/2C7ULPTrpBsSpmfWQ6ShaVoQzfThFUd0MsBvIN7HVtqzPx9jbSV04wAqyNjcro7F3iu9w7AEsMejHbFlWoN+J05dP5ixryF7+2U5RVmjMt7/dYUdCoiXvCMt2CaVr0XEG6udHU4iDKVKZjmUBc7cTWRzhqEL7lZ1yQfylp38Nd2xxVJ0sSU7OkC1bBDlePcYGaF3JjJgsmp/H5BNnlW9gSxQ==",
        exponent:"AQAB",
        oldmodulus:"u/ppb/da4jeKQ+XzKr69VJTqR7wgQp2jzDIaEPQVzfwod+pc1zvO7cwjNgfzF/KQGkltoOi9KdtMzR0qmX8C5wZI6wGpS8S4pTFAZPhXg5w4EpyR8fAagrnlOgaVLs0oX5UuBqKndCQyM7Vj5nFd+r53giS0ch7zDW0uB1G+ZWqTZ1TwbtV6dmlpVuJYeIPonOJgo2iuh455KuS2gvxZKOKR27Uq7W949oM8sqRjvfaVf4xDmyor++98XX0zadnf4pMWfPr3XE+bCXtB9jIPAxxMrALf5ncNRhnx0Wyf8zfM7Rfq+omp/HxCgusF5MC2/Ffnn7me/628zzioAMy5pQ==",
        oldexponent:"AQAB"
    },
    !!"booleanToIgnoreTime"
);

assert.equal(result, true, 'expected validation to pass')

result = wopiValidator.check(
    {
        url: "https://contoso.com/wopi/files/JIB9h+LJpZWBDwvoIiQ5p3115zJWDecpGF9aCm1vOa5UMllgC7w?access_token=RLoY%2f3D73%2fjwt6IQqR1wHqCEKDxRf2v0GPDa0ZHTlA6ik1%2fNBHDD6bHCI0BQrvacjNBL8ok%2fZsVPI%2beAIA5mHSOUbhW9ohowwD6Ljlwro2n5PkTBh6GEYi2afuCIQ8mjXAUdvEDg3um2GjJKtA%3d%3d",
        accessToken:  "RLoY%2f3D73%2fjwt6IQqR1wHqCEKDxRf2v0GPDa0ZHTlA6ik1%2fNBHDD6bHCI0BQrvacjNBL8ok%2fZsVPI%2beAIA5mHSOUbhW9ohowwD6Ljlwro2n5PkTBh6GEYi2afuCIQ8mjXAUdvEDg3um2GjJKtA%3d%3d",
        timestamp: '635655897361394523' //Too big for JavaScript numeric types
    },
    {
        proof: "x0IeSOjUQNH2pvjMPkP4Jotzs5Weeqms4AlPxMQ5CipssUJbyKFjLWnwPg1Ac0XtSTiPD177BmQ1+KtmYvDTWQ1FmBuvpvKZDSKzXoT6Qj4LCYYQ0TxnN/OT231+qd50sOD8zAxhfXP56qND9tj5xqoHMa+lbuvNCqiOBTZw5f/dklSK7Wgdx7ST3Dq6S9xxDUfsLC4Tjq+EsvcdSNIWL/W6NRZdyWqlgRgE6X8t/2iyyMypURdOW2Rztc6w/iYhbuh22Ul6Jfu14KaDo6YkvBr8iHlK4CcQST9i0u044y1Jnh34UK4EPdVRZrvTmeJ/5DFLWOqEwvBlW2bpoYF+9A==",
        proofold: "etYRI9UT6q8jA6PHMMmuGa8NbyIlbTHMHmJZqaCOh2GCpv7um2q7+7oaDFqAV/UP+2N85yZXvZgt9kTOUCwIdggUQVeJluNCwf1B5NsN/7n2aQF9LnWyYK8kK/3xvQKQrj4n24jk2MnHcX1tk8H/qLxq2DbPzi6ROoSgs2ZK8nmzhSPF74jnLCrwiwGgnVZV6gIhlAKCcUGtdrT60sgD/wpJGQQ0M59VDQhf1aDj5bUotf8RXovY8Gl0lpguvN4+EsEjpbVjdV9hxWs7c03JDdoz7mzFUWErSly9IzYXNfuFZMnSXpF3lGiprVJvW34Bu2gTo/cLq4LQoABkNCmd4g=="
    },
    {
        // modulus from a different source
        modulus:"qF15pAAnOATqpUTLHIS/Z5K7OYFVjWcgKGbHPa0eHRayXsb6JKTelGQhvs74gEFgg1mIgcCORwAtMzLmEFmOHgrdvkGvRzT3jtVVtwkxEhQt8aQL20N0Nwn4wNah0HeBHskdvmA1G/qcaFp8uTgHpRYFoBaSHEP3AZVNFg5y2jyYR34nNj359gktc2ZyLel3J3j7XtyjpRPHvvYVQfh7RsArLQ0VGp8sL4/BDHdSsUyJ8FXe67TSrz6TMZPwhEUR8dYHYek9qbQjC+wxPpo3G/yusucm1gHo0BjW/l36cI8FRmNs1Fqaeppxqu31FhR8dEl7w5dwefa9wOUKcChF6A==",
        exponent:"AQAB",
        oldmodulus:"0HOWUPFFgmSYHbLZZzdWO/HUOr8YNfx5NAl7GUytooHZ7B9QxQKTJpj0NIJ4XEskQW8e4dLzRrPbNOOJ+KpWHttXz8HoQXkkZV/gYNxaNHJ8/pRXGMZzfVM5vchhx/2C7ULPTrpBsSpmfWQ6ShaVoQzfThFUd0MsBvIN7HVtqzPx9jbSV04wAqyNjcro7F3iu9w7AEsMejHbFlWoN+J05dP5ixryF7+2U5RVmjMt7/dYUdCoiXvCMt2CaVr0XEG6udHU4iDKVKZjmUBc7cTWRzhqEL7lZ1yQfylp38Nd2xxVJ0sSU7OkC1bBDlePcYGaF3JjJgsmp/H5BNnlW9gSxQ==",
        oldexponent:"AQAB"
    },
    !!"booleanToIgnoreTime"
);

assert.equal(result, true, 'expected validation to continue workgin after modulus rotation')

result = wopiValidator.check(
    {
        url: "https://contoso.com/wopi/files/JIB9h+LJpZWBDwvoIiQ5p3115zJWDecpGF9aCm1vOa5UMllgC7w?access_token=RLoY%2f3D73%2fjwt6IQqR1wHqCEKDxRf2v0GPDa0ZHTlA6ik1%2fNBHDD6bHCI0BQrvacjNBL8ok%2fZsVPI%2beAIA5mHSOUbhW9ohowwD6Ljlwro2n5PkTBh6GEYi2afuCIQ8mjXAUdvEDg3um2GjJKtA%3d%3d",
        accessToken:  "RLoY%2f3D73%2fjwt6IQqR1wHqCEKDxRf2v0GPDa0ZHTlA6ik1%2fNBHDD6bHCI0BQrvacjNBL8ok%2fZsVPI%2beAIA5mHSOUbhW9ohowwD6Ljlwro2n5PkTBh6GEYi2afuCIQ8mjXAUdvEDg3um2GjJKtA%3d%3d",
        timestamp: '635655897361394523' //Too big for JavaScript numeric types
    },
    {
        proof: "x0IeSOjUQNH2pvjMPkP4Jotzs5Weeqms4AlPxMQ5CipssUJbyKFjLWnwPg1Ac0XtSTiPD177BmQ1+KtmYvDTWQ1FmBuvpvKZDSKzXoT6Qj4LCYYQ0TxnN/OT231+qd50sOD8zAxhfXP56qND9tj5xqoHMa+lbuvNCqiOBTZw5f/dklSK7Wgdx7ST3Dq6S9xxDUfsLC4Tjq+EsvcdSNIWL/W6NRZdyWqlgRgE6X8t/2iyyMypURdOW2Rztc6w/iYhbuh22Ul6Jfu14KaDo6YkvBr8iHlK4CcQST9i0u044y1Jnh34UK4EPdVRZrvTmeJ/5DFLWOqEwvBlW2bpoYF+9A==",
        proofold: "etYRI9UT6q8jA6PHMMmuGa8NbyIlbTHMHmJZqaCOh2GCpv7um2q7+7oaDFqAV/UP+2N85yZXvZgt9kTOUCwIdggUQVeJluNCwf1B5NsN/7n2aQF9LnWyYK8kK/3xvQKQrj4n24jk2MnHcX1tk8H/qLxq2DbPzi6ROoSgs2ZK8nmzhSPF74jnLCrwiwGgnVZV6gIhlAKCcUGtdrT60sgD/wpJGQQ0M59VDQhf1aDj5bUotf8RXovY8Gl0lpguvN4+EsEjpbVjdV9hxWs7c03JDdoz7mzFUWErSly9IzYXNfuFZMnSXpF3lGiprVJvW34Bu2gTo/cLq4LQoABkNCmd4g=="
    },
    {
        modulus:"0HOWUPFFgmSYHbLZZzdWO/HUOr8YNfx5NAl7GUytooHZ7B9QxQKTJpj0NIJ4XEskQW8e4dLzRrPbNOOJ+KpWHttXz8HoQXkkZV/gYNxaNHJ8/pRXGMZzfVM5vchhx/2C7ULPTrpBsSpmfWQ6ShaVoQzfThFUd0MsBvIN7HVtqzPx9jbSV04wAqyNjcro7F3iu9w7AEsMejHbFlWoN+J05dP5ixryF7+2U5RVmjMt7/dYUdCoiXvCMt2CaVr0XEG6udHU4iDKVKZjmUBc7cTWRzhqEL7lZ1yQfylp38Nd2xxVJ0sSU7OkC1bBDlePcYGaF3JjJgsmp/H5BNnlW9gSxQ==",
        exponent:"AQAB",
        oldmodulus:"u/ppb/da4jeKQ+XzKr69VJTqR7wgQp2jzDIaEPQVzfwod+pc1zvO7cwjNgfzF/KQGkltoOi9KdtMzR0qmX8C5wZI6wGpS8S4pTFAZPhXg5w4EpyR8fAagrnlOgaVLs0oX5UuBqKndCQyM7Vj5nFd+r53giS0ch7zDW0uB1G+ZWqTZ1TwbtV6dmlpVuJYeIPonOJgo2iuh455KuS2gvxZKOKR27Uq7W949oM8sqRjvfaVf4xDmyor++98XX0zadnf4pMWfPr3XE+bCXtB9jIPAxxMrALf5ncNRhnx0Wyf8zfM7Rfq+omp/HxCgusF5MC2/Ffnn7me/628zzioAMy5pQ==",
        oldexponent:"AQAB"
    }
);

assert.equal(result, false, 'expected validation to fail on timestamp too old')

result = wopiValidator.check(
    {
        url: "https://contoso.com/wopi/files/JIB9h+LJpZWBDwvoIiQ5p3115zJWDecpGF9aCm1vOa5UMllgC7w?access_token=RLoY%2f3D73%2fjwt6IQqR1wHqCEKDxRf2v0GPDa0ZHTlA6ik1%2fNBHDD6bHCI0BQrvacjNBL8ok%2fZsVPI%2beAIA5mHSOUbhW9ohowwD6Ljlwro2n5PkTBh6GEYi2afuCIQ8mjXAUdvEDg3um2GjJKtA%3d%3d",
        accessToken:  "RLoY%2f3D73%2fjwt6IQqR1wHqCEKDxRf2v0GPDa0ZHTlA6ik1%2fNBHDD6bHCI0BQrvacjNBL8ok%2fZsVPI%2beAIA5mHSOUbhW9ohowwD6Ljlwro2n5PkTBh6GEYi2afuCIQ8mjXAUdvEDg3um2GjJKtA%3d%3d",
        timestamp: '635655897361394523' //Too big for JavaScript numeric types
    },
    {
        proof: "certainly wrong",
        proofold: "certainly wrong"
    },
    {
        modulus:"0HOWUPFFgmSYHbLZZzdWO/HUOr8YNfx5NAl7GUytooHZ7B9QxQKTJpj0NIJ4XEskQW8e4dLzRrPbNOOJ+KpWHttXz8HoQXkkZV/gYNxaNHJ8/pRXGMZzfVM5vchhx/2C7ULPTrpBsSpmfWQ6ShaVoQzfThFUd0MsBvIN7HVtqzPx9jbSV04wAqyNjcro7F3iu9w7AEsMejHbFlWoN+J05dP5ixryF7+2U5RVmjMt7/dYUdCoiXvCMt2CaVr0XEG6udHU4iDKVKZjmUBc7cTWRzhqEL7lZ1yQfylp38Nd2xxVJ0sSU7OkC1bBDlePcYGaF3JjJgsmp/H5BNnlW9gSxQ==",
        exponent:"AQAB",
        oldmodulus:"u/ppb/da4jeKQ+XzKr69VJTqR7wgQp2jzDIaEPQVzfwod+pc1zvO7cwjNgfzF/KQGkltoOi9KdtMzR0qmX8C5wZI6wGpS8S4pTFAZPhXg5w4EpyR8fAagrnlOgaVLs0oX5UuBqKndCQyM7Vj5nFd+r53giS0ch7zDW0uB1G+ZWqTZ1TwbtV6dmlpVuJYeIPonOJgo2iuh455KuS2gvxZKOKR27Uq7W949oM8sqRjvfaVf4xDmyor++98XX0zadnf4pMWfPr3XE+bCXtB9jIPAxxMrALf5ncNRhnx0Wyf8zfM7Rfq+omp/HxCgusF5MC2/Ffnn7me/628zzioAMy5pQ==",
        oldexponent:"AQAB"
    },
    !!"booleanToIgnoreTime"
);

assert.equal(result, false, 'expected validation to fail when proofs are incorrect')
