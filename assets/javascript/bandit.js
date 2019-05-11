$(document).ready(function(){
    $('#zero').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('Bandit Level 0');
        let goal = $('<h2>').text('Level Goal');
        let desc = $('<p>').text('The goal of this level is for you to log into the game using SSH. The host to which you need to connect is bandit.labs.overthewire.org, on port 2220. The username is bandit0 and the password is bandit0. Once logged in, go to the Level 1 page to find out how to beat Level 1.')
        let help = $('<h2>').text('Commands you may need to solve this level');
        let commands = $('<p>').text('ssh')

        $('#container').append(title, goal, desc, help, commands);
    })
    $('#one').on('click', function(event){
        event.preventDefault();

        clearFunction();

        let title = $('<h1>').text('Bandit Level 0 -> 1');
        let goal = $('<h2>').text('Level Goal');
        let desc = $('<p>').text('The password for the next level is stored in a file called readme located in the home directory. Use this password to log into bandit1 using SSH. Whenever you find a password for a level, use SSH (on port 2220) to log into that level and continue the game.')
        let help = $('<h2>').text('Commands you may need to solve this level');
        let commands = $('<p>').text('ls, cd, cat, file, du, find')

        $('#container').append(title, goal, desc, help, commands);
    })
    $('#two').on('click', function(event){
        event.preventDefault();

        clearFunction();

        let title = $('<h1>').text('Bandit Level 1 -> 2');
        let goal = $('<h2>').text('Level Goal');
        let desc = $('<p>').text('The password for the next level is stored in a file called - located in the home directory')
        let help = $('<h2>').text('Commands you may need to solve this level');
        let commands = $('<p>').text('ls, cd, cat, file, du, find')

        $('#container').append(title, goal, desc, help, commands);
    })
    $('#three').on('click', function(event){
        event.preventDefault();

        clearFunction();

        let title = $('<h1>').text('Bandit Level 2 -> 3');
        let goal = $('<h2>').text('Level Goal');
        let desc = $('<p>').text('The password for the next level is stored in a file called spaces in this filename located in the home directory')
        let help = $('<h2>').text('Commands you may need to solve this level');
        let commands = $('<p>').text('ls, cd, cat, file, du, find')

        $('#container').append(title, goal, desc, help, commands);
    })
    $('#four').on('click', function(event){
        event.preventDefault();

        clearFunction();

        let title = $('<h1>').text('Bandit Level 3 -> 4');
        let goal = $('<h2>').text('Level Goal');
        let desc = $('<p>').text('The password for the next level is stored in a hidden file in the inhere directory.')
        let help = $('<h2>').text('Commands you may need to solve this level');
        let commands = $('<p>').text('ls, cd, cat, file, du, find')

        $('#container').append(title, goal, desc, help, commands);
    })
    $('#five').on('click', function(event){
        event.preventDefault();

        clearFunction();

        let title = $('<h1>').text('Bandit Level 4 -> 5');
        let goal = $('<h2>').text('Level Goal');
        let desc = $('<p>').text('The password for the next level is stored in the only human-readable file in the inhere directory. Tip: if your terminal is messed up, try the “reset” command.')
        let help = $('<h2>').text('Commands you may need to solve this level');
        let commands = $('<p>').text('ls, cd, cat, file, du, find')

        $('#container').append(title, goal, desc, help, commands);
    })
    $('#six').on('click', function(event){
        event.preventDefault();

        clearFunction();

        let title = $('<h1>').text('Bandit Level 5 -> 6');
        let goal = $('<h2>').text('Level Goal');
        let desc = $('<p>').text('The password for the next level is stored in a file somewhere under the inhere directory and has all of the following properties: human-readable, 1033 bytes in size, not executable')
        let help = $('<h2>').text('Commands you may need to solve this level');
        let commands = $('<p>').text('ls, cd, cat, file, du, find')

        $('#container').append(title, goal, desc, help, commands);
    })
    $('#seven').on('click', function(event){
        event.preventDefault();

        clearFunction();

        let title = $('<h1>').text('Bandit Level 6 -> 7');
        let goal = $('<h2>').text('Level Goal');
        let desc = $('<p>').text('The password for the next level is stored somewhere on the server and has all of the following properties: owned by user bandit7, owned by group bandit6, 33 bytes in size')
        let help = $('<h2>').text('Commands you may need to solve this level');
        let commands = $('<p>').text('ls, cd, cat, file, du, find, grep')

        $('#container').append(title, goal, desc, help, commands);
    })
    $('#eight').on('click', function(event){
        event.preventDefault();

        clearFunction();

        let title = $('<h1>').text('Bandit Level 7 -> 8');
        let goal = $('<h2>').text('Level Goal');
        let desc = $('<p>').text('The password for the next level is stored in the file data.txt next to the word millionth')
        let help = $('<h2>').text('Commands you may need to solve this level');
        let commands = $('<p>').text('grep, sort, uniq, strings, base64, tr, tar, gzip, bzip2, xxd')

        $('#container').append(title, goal, desc, help, commands);
    })
    $('#nine').on('click', function(event){
        event.preventDefault();

        clearFunction();

        let title = $('<h1>').text('Bandit Level 8 -> 9');
        let goal = $('<h2>').text('Level Goal');
        let desc = $('<p>').text('The password for the next level is stored in the file data.txt and is the only line of text that occurs only once')
        let help = $('<h2>').text('Commands you may need to solve this level');
        let commands = $('<p>').text('grep, sort, uniq, strings, base64, tr, tar, gzip, bzip2, xxd')

        $('#container').append(title, goal, desc, help, commands);
    })
    $('#ten').on('click', function(event){
        event.preventDefault();

        clearFunction();

        let title = $('<h1>').text('Bandit Level 9 -> 10');
        let goal = $('<h2>').text('Level Goal');
        let desc = $('<p>').text('The password for the next level is stored in the file data.txt in one of the few human-readable strings, beginning with several ‘=’ characters.')
        let help = $('<h2>').text('Commands you may need to solve this level');
        let commands = $('<p>').text('grep, sort, uniq, strings, base64, tr, tar, gzip, bzip2, xxd')

        $('#container').append(title, goal, desc, help, commands);
    })
    $('#eleven').on('click', function(event){
        event.preventDefault();

        clearFunction();

        let title = $('<h1>').text('Bandit Level 10 -> 11');
        let goal = $('<h2>').text('Level Goal');
        let desc = $('<p>').text('The password for the next level is stored in the file data.txt, which contains base64 encoded data')
        let help = $('<h2>').text('Commands you may need to solve this level');
        let commands = $('<p>').text('grep, sort, uniq, strings, base64, tr, tar, gzip, bzip2, xxd')

        $('#container').append(title, goal, desc, help, commands);
    })
    $('#twelve').on('click', function(event){
        event.preventDefault();

        clearFunction();

        let title = $('<h1>').text('Bandit Level 11 -> 12');
        let goal = $('<h2>').text('Level Goal');
        let desc = $('<p>').text('The password for the next level is stored in the file data.txt, where all lowercase (a-z) and uppercase (A-Z) letters have been rotated by 13 positions')
        let help = $('<h2>').text('Commands you may need to solve this level');
        let commands = $('<p>').text('grep, sort, uniq, strings, base64, tr, tar, gzip, bzip2, xxd')

        $('#container').append(title, goal, desc, help, commands);
    })
    $('#thirteen').on('click', function(event){
        event.preventDefault();

        clearFunction();

        let title = $('<h1>').text('Bandit Level 12 -> 13');
        let goal = $('<h2>').text('Level Goal');
        let desc = $('<p>').text('The password for the next level is stored in the file data.txt, which is a hexdump of a file that has been repeatedly compressed. For this level it may be useful to create a directory under /tmp in which you can work using mkdir. For example: mkdir /tmp/myname123. Then copy the datafile using cp, and rename it using mv (read the manpages!)')
        let help = $('<h2>').text('Commands you may need to solve this level');
        let commands = $('<p>').text('grep, sort, uniq, strings, base64, tr, tar, gzip, bzip2, xxd, mkdir, cp, mv, file')

        $('#container').append(title, goal, desc, help, commands);
    })
    $('#fourteen').on('click', function(event){
        event.preventDefault();

        clearFunction();

        let title = $('<h1>').text('Bandit Level 13 -> 14');
        let goal = $('<h2>').text('Level Goal');
        let desc = $('<p>').text('The password for the next level is stored in /etc/bandit_pass/bandit14 and can only be read by user bandit14. For this level, you don’t get the next password, but you get a private SSH key that can be used to log into the next level. Note: localhost is a hostname that refers to the machine you are working on')
        let help = $('<h2>').text('Commands you may need to solve this level');
        let commands = $('<p>').text('ssh, telnet, nc, openssl, s_client, nmap')

        $('#container').append(title, goal, desc, help, commands);
    })
    $('#fifteen').on('click', function(event){
        event.preventDefault();

        clearFunction();

        let title = $('<h1>').text('Bandit Level 14 -> 15');
        let goal = $('<h2>').text('Level Goal');
        let desc = $('<p>').text('The password for the next level can be retrieved by submitting the password of the current level to port 30000 on localhost.')
        let help = $('<h2>').text('Commands you may need to solve this level');
        let commands = $('<p>').text('ssh, telnet, nc, openssl, s_client, nmap')

        $('#container').append(title, goal, desc, help, commands);
    })
    $('#sixteen').on('click', function(event){
        event.preventDefault();

        clearFunction();

        let title = $('<h1>').text('Bandit Level 15 -> 16');
        let goal = $('<h2>').text('Level Goal');
        let desc = $('<p>').text('The password for the next level can be retrieved by submitting the password of the current level to port 30001 on localhost using SSL encryption.')
        let help = $('<h2>').text('Commands you may need to solve this level');
        let commands = $('<p>').text('ssh, telnet, nc, openssl, s_client, nmap')

        $('#container').append(title, goal, desc, help, commands);
    })
    $('#seventeen').on('click', function(event){
        event.preventDefault();

        clearFunction();

        let title = $('<h1>').text('Bandit Level 16 -> 17');
        let goal = $('<h2>').text('Level Goal');
        let desc = $('<p>').text('The credentials for the next level can be retrieved by submitting the password of the current level to a port on localhost in the range 31000 to 32000. First find out which of these ports have a server listening on them. Then find out which of those speak SSL and which don’t. There is only 1 server that will give the next credentials, the others will simply send back to you whatever you send to it.')
        let help = $('<h2>').text('Commands you may need to solve this level');
        let commands = $('<p>').text('ls, cd, cat, file, du, find')

        $('#container').append(title, goal, desc, help, commands);
    })
    $('#eighteen').on('click', function(event){
        event.preventDefault();

        clearFunction();

        let title = $('<h1>').text('Bandit Level 17 -> 18');
        let goal = $('<h2>').text('Level Goal');
        let desc = $('<p>').text('There are 2 files in the homedirectory: passwords.old and passwords.new. The password for the next level is in passwords.new and is the only line that has been changed between passwords.old and passwords.new')
        let help = $('<h2>').text('Commands you may need to solve this level');
        let commands = $('<p>').text('cat, grep, ls, diff')

        $('#container').append(title, goal, desc, help, commands);
    })
    $('#nineteen').on('click', function(event){
        event.preventDefault();

        clearFunction();

        let title = $('<h1>').text('Bandit Level 18 -> 19');
        let goal = $('<h2>').text('Level Goal');
        let desc = $('<p>').text('The password for the next level is stored in a file readme in the homedirectory. Unfortunately, someone has modified .bashrc to log you out when you log in with SSH.')
        let help = $('<h2>').text('Commands you may need to solve this level');
        let commands = $('<p>').text('ssh, ls, cat')

        $('#container').append(title, goal, desc, help, commands);
    })
    $('#twenty').on('click', function(event){
        event.preventDefault();

        clearFunction();

        let title = $('<h1>').text('Bandit Level 19 -> 20');
        let goal = $('<h2>').text('Level Goal');
        let desc = $('<p>').text('To gain access to the next level, you should use the setuid binary in the homedirectory. Execute it without arguments to find out how to use it. The password for this level can be found in the usual place (/etc/bandit_pass), after you have used the setuid binary.')
        let help = $('<h2>').text('Commands you may need to solve this level');
        let commands = $('<p>').text('')

        $('#container').append(title, goal, desc, help, commands);
    })
    $('#twentyone').on('click', function(event){
        event.preventDefault();

        clearFunction();

        let title = $('<h1>').text('Bandit Level 20 -> 21');
        let goal = $('<h2>').text('Level Goal');
        let desc = $('<p>').text('There is a setuid binary in the homedirectory that does the following: it makes a connection to localhost on the port you specify as a commandline argument. It then reads a line of text from the connection and compares it to the password in the previous level (bandit20). If the password is correct, it will transmit the password for the next level (bandit21).')
        let help = $('<h2>').text('Commands you may need to solve this level');
        let commands = $('<p>').text('ssh, nc, cat, bash, screen, tmux, Unix ‘job control’ (bg, fg, jobs, &, CTRL-Z, …)')

        $('#container').append(title, goal, desc, help, commands);
    })
    $('#twentytwo').on('click', function(event){
        event.preventDefault();

        clearFunction();

        let title = $('<h1>').text('Bandit Level 21 -> 22');
        let goal = $('<h2>').text('Level Goal');
        let desc = $('<p>').text('A program is running automatically at regular intervals from cron, the time-based job scheduler. Look in /etc/cron.d/ for the configuration and see what command is being executed.')
        let help = $('<h2>').text('Commands you may need to solve this level');
        let commands = $('<p>').text('cron, crontab, crontab(5) (use “man 5 crontab” to access this)')

        $('#container').append(title, goal, desc, help, commands);
    })
    $('#twentythree').on('click', function(event){
        event.preventDefault();

        clearFunction();

        let title = $('<h1>').text('Bandit Level 22 -> 23');
        let goal = $('<h2>').text('Level Goal');
        let desc = $('<p>').text('A program is running automatically at regular intervals from cron, the time-based job scheduler. Look in /etc/cron.d/ for the configuration and see what command is being executed.')
        let help = $('<h2>').text('Commands you may need to solve this level');
        let commands = $('<p>').text('cron, crontab, crontab(5) (use “man 5 crontab” to access this)')

        $('#container').append(title, goal, desc, help, commands);
    })
    $('#twentyfour').on('click', function(event){
        event.preventDefault();

        clearFunction();

        let title = $('<h1>').text('Bandit Level 23 -> 24');
        let goal = $('<h2>').text('Level Goal');
        let desc = $('<p>').text('A program is running automatically at regular intervals from cron, the time-based job scheduler. Look in /etc/cron.d/ for the configuration and see what command is being executed.')
        let help = $('<h2>').text('Commands you may need to solve this level');
        let commands = $('<p>').text('cron, crontab, crontab(5) (use “man 5 crontab” to access this)')

        $('#container').append(title, goal, desc, help, commands);
    })
    $('#twentyfive').on('click', function(event){
        event.preventDefault();

        clearFunction();

        let title = $('<h1>').text('Bandit Level 24 -> 25');
        let goal = $('<h2>').text('Level Goal');
        let desc = $('<p>').text('A daemon is listening on port 30002 and will give you the password for bandit25 if given the password for bandit24 and a secret numeric 4-digit pincode. There is no way to retrieve the pincode except by going through all of the 10000 combinations, called brute-forcing.')
        let help = $('<h2>').text('Commands you may need to solve this level');
        let commands = $('<p>').text('')

        $('#container').append(title, goal, desc, help, commands);
    })
    $('#twentysix').on('click', function(event){
        event.preventDefault();

        clearFunction();

        let title = $('<h1>').text('Bandit Level 25 -> 26');
        let goal = $('<h2>').text('Level Goal');
        let desc = $('<p>').text('Logging in to bandit26 from bandit25 should be fairly easy… The shell for user bandit26 is not /bin/bash, but something else. Find out what it is, how it works and how to break out of it.')
        let help = $('<h2>').text('Commands you may need to solve this level');
        let commands = $('<p>').text('ssh, cat, more, vi, ls, id, pwd')

        $('#container').append(title, goal, desc, help, commands);
    })
    $('#twentyseven').on('click', function(event){
        event.preventDefault();

        clearFunction();

        let title = $('<h1>').text('Bandit Level 26 -> 27');
        let goal = $('<h2>').text('Level Goal');
        let desc = $('<p>').text('Good job getting a shell! Now hurry and grab the password for bandit27!')
        let help = $('<h2>').text('Commands you may need to solve this level');
        let commands = $('<p>').text('ls')

        $('#container').append(title, goal, desc, help, commands);
    })
    $('#twentyeight').on('click', function(event){
        event.preventDefault();

        clearFunction();

        let title = $('<h1>').text('Bandit Level 27 -> 28');
        let goal = $('<h2>').text('Level Goal');
        let desc = $('<p>').text('There is a git repository at ssh://bandit27-git@localhost/home/bandit27-git/repo. The password for the user bandit27-git is the same as for the user bandit27.')
        let help = $('<h2>').text('Commands you may need to solve this level');
        let commands = $('<p>').text('git')

        $('#container').append(title, goal, desc, help, commands);
    })
    $('#twentynine').on('click', function(event){
        event.preventDefault();

        clearFunction();

        let title = $('<h1>').text('Bandit Level 28 -> 29');
        let goal = $('<h2>').text('Level Goal');
        let desc = $('<p>').text('There is a git repository at ssh://bandit28-git@localhost/home/bandit28-git/repo. The password for the user bandit28-git is the same as for the user bandit28.')
        let help = $('<h2>').text('Commands you may need to solve this level');
        let commands = $('<p>').text('git')

        $('#container').append(title, goal, desc, help, commands);
    })
    $('#thirty').on('click', function(event){
        event.preventDefault();

        clearFunction();

        let title = $('<h1>').text('Bandit Level 29 -> 30');
        let goal = $('<h2>').text('Level Goal');
        let desc = $('<p>').text('There is a git repository at ssh://bandit29-git@localhost/home/bandit29-git/repo. The password for the user bandit29-git is the same as for the user bandit29.')
        let help = $('<h2>').text('Commands you may need to solve this level');
        let commands = $('<p>').text('git')

        $('#container').append(title, goal, desc, help, commands);
    })
    $('#thirtyone').on('click', function(event){
        event.preventDefault();

        clearFunction();

        let title = $('<h1>').text('Bandit Level 30 -> 31');
        let goal = $('<h2>').text('Level Goal');
        let desc = $('<p>').text('There is a git repository at ssh://bandit30-git@localhost/home/bandit30-git/repo. The password for the user bandit30-git is the same as for the user bandit30.')
        let help = $('<h2>').text('Commands you may need to solve this level');
        let commands = $('<p>').text('git')

        $('#container').append(title, goal, desc, help, commands);
    })
    $('#thirtytwo').on('click', function(event){
        event.preventDefault();

        clearFunction();

        let title = $('<h1>').text('Bandit Level 31 -> 32');
        let goal = $('<h2>').text('Level Goal');
        let desc = $('<p>').text('There is a git repository at ssh://bandit31-git@localhost/home/bandit31-git/repo. The password for the user bandit31-git is the same as for the user bandit31.')
        let help = $('<h2>').text('Commands you may need to solve this level');
        let commands = $('<p>').text('git')

        $('#container').append(title, goal, desc, help, commands);
    })
    $('#thirtythree').on('click', function(event){
        event.preventDefault();

        clearFunction();

        let title = $('<h1>').text('Bandit Level 32 -> 33');
        let goal = $('<h2>').text('Level Goal');
        let desc = $('<p>').text('After all this git stuff its time for another escape. Good luck!')
        let help = $('<h2>').text('Commands you may need to solve this level');
        let commands = $('<p>').text('sh, man')

        $('#container').append(title, goal, desc, help, commands);
    })
})




let clearFunction = function(){
    $('#container').empty();
  }