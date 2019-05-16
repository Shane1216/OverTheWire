$(document).ready(function(){
    $('#ls').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('ls');
        let desc = $('<p>').text('List  information  about  the FILEs (the current directory by default).')

        $('#container').append(title, desc);
    })
    $('#cd').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('cd');
        let desc = $('<p>').text('Changes the directory.')

        $('#container').append(title, desc);
    })
    $('#cat').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('cat');
        let desc = $('<p>').text('Can be used for reading files, concatenating files, and file creation.')

        $('#container').append(title, desc);
    })
    $('#file').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('file');
        let desc = $('<p>').text('Used to determine file type.')

        $('#container').append(title, desc);
    })
    $('#du').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('du');
        let desc = $('<p>').text('Used to estimate file space usage.')

        $('#container').append(title, desc);
    })
    $('#find').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('find');
        let desc = $('<p>').text('The find command in UNIX is a command line utility for walking a file hierarchy. It can be used to find files and directories and perform subsequent operations on them.')

        $('#container').append(title, desc);
    })
    $('#grep').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('grep');
        let desc = $('<p>').text('The grep filter searches a file for a particular pattern of characters, and displays all lines that contain that pattern. The pattern that is searched in the file is referred to as the regular expression (grep stands for globally search for regular expression and print out).')

        $('#container').append(title, desc);
    })
    $('#sort').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('sort');
        let desc = $('<p>').text('Used to sort a file, arranging the records in a particular order. By default, the sort command sorts file assuming the contents are ASCII. Using options in sort command, it can also be used to sort numerically.')

        $('#container').append(title, desc);
    })
    $('#uniq').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('uniq');
        let desc = $('<p>').text('The uniq command in Linux is a command line utility that reports or filters out the repeated lines in a file.')

        $('#container').append(title, desc);
    })
    $('#strings').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('strings');
        let desc = $('<p>').text('Prints the strings of printable characters in files.')

        $('#container').append(title, desc);
    })
    $('#base64').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('base64');
        let desc = $('<p>').text('Used to encode or decode files for the base64 alphabet.')

        $('#container').append(title, desc);
    })
    $('#tr').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('tr');
        let desc = $('<p>').text('Command line utility for translating or deleting characters. It supports a range of transformations including uppercase to lowercase, squeezing repeating characters, deleting specific characters and basic find and replace. It can be used with UNIX pipes to support more complex translation. tr stands for translate.')

        $('#container').append(title, desc);
    })
    $('#tar').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('tar');
        let desc = $('<p>').text('The Linux ‘tar’ stands for tape archive, is used to create Archive and extract the Archive files. tar command in Linux is one of the important command which provides archiving functionality in Linux. We can use Linux tar command to create compressed or uncompressed Archive files and also maintain and modify them.')

        $('#container').append(title, desc);
    })
    $('#gzip').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('gzip');
        let desc = $('<p>').text('The gzip command is a common way of compressing files within Linux and therefore it is worth knowing how to compress files using this tool.')

        $('#container').append(title, desc);
    })
    $('#xxd').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('xxd');
        let desc = $('<p>').text('xxd creates a hex dump of a given file or standard input. It can also convert a hex dump back to its original binary form.')

        $('#container').append(title, desc);
    })
    $('#mkdir').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('mkdir');
        let desc = $('<p>').text('Makes a new directory.')

        $('#container').append(title, desc);
    })
    $('#cp').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('cp');
        let desc = $('<p>').text('This command is used to copy files or group of files or directory. It creates an exact image of a file on a disk with different file name. cp command require at least two filenames in its arguments.')

        $('#container').append(title, desc);
    })
    $('#mv').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('mv');
        let desc = $('<p>').text('Can be used to either rename a file or folder or to move a group of files to a different directory.')

        $('#container').append(title, desc);
    })
    $('#ssh').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('ssh');
        let desc = $('<p>').text('Protocol used to securely connect to a remote server/system. ssh is secure in the sense that it transfers the data in encrypted form between the host and the client. It transfers inputs from the client to the host and relays back the output. ssh runs at TCP/IP port 22.')

        $('#container').append(title, desc);
    })
    $('#telnet').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('telnet');
        let desc = $('<p>').text('Similiar to ssh except nothing is encrypted.')

        $('#container').append(title, desc);
    })
    $('#nc').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('nc');
        let desc = $('<p>').text('Computer networking utility for reading from and writing to network connections using TCP or UDP.')

        $('#container').append(title, desc);
    })
    $('#openssl').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('openssl');
        let desc = $('<p>').text('A software library for applications that secure communications over computer networks against eavesdropping or need to identify the party at the other end. It is widely used in Internet web servers, serving a majority of all web sites.')

        $('#container').append(title, desc);
    })
    $('#nmap').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('nmap');
        let desc = $('<p>').text('Used for exploring networks, perform security scans, network audit and finding open ports on remote machine.')

        $('#container').append(title, desc);
    })
    $('#diff').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('diff');
        let desc = $('<p>').text('Used to display the differences in the files by comparing the files line by line. Unlike its fellow members, cmp and comm, it tells us which lines in one file have is to be changed to make the two files identical.')

        $('#container').append(title, desc);
    })
    $('#bash').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('bash');
        let desc = $('<p>').text('Bash is the GNU Project\'s shell. Bash is the Bourne Again SHell. Bash is an sh-compatible shell that incorporates useful features from the Korn shell (ksh) and C shell (csh). It is intended to conform to the IEEE POSIX P1003.2/ISO 9945.2 Shell and Tools standard. It offers functional improvements over sh for both programming and interactive use. In addition, most sh scripts can be run by Bash without modification.')

        $('#container').append(title, desc);
    })
    $('#screen').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('screen');
        let desc = $('<p>').text('Screen or GNU Screen is a terminal multiplexer. In other words, it means that you can start a screen session and then open any number of windows (virtual terminals) inside that session. Processes running in Screen will continue to run when their window is not visible even if you get disconnected.')

        $('#container').append(title, desc);
    })
    $('#tmux').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('tmux');
        let desc = $('<p>').text('Alternative terminal multiplexer to screen.')

        $('#container').append(title, desc);
    })
    $('#cron').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('cron');
        let desc = $('<p>').text('A time-based job scheduler in Unix-like computer operating systems.')

        $('#container').append(title, desc);
    })
    $('#crontab').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('crontab');
        let desc = $('<p>').text('File that drives the cron, config file that specifies shell commands to run periodically on a given schedule.')

        $('#container').append(title, desc);
    })
    $('#more').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('more');
        let desc = $('<p>').text('A filter for paging through text one screenful at a time.')

        $('#container').append(title, desc);
    })
    $('#vi').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('vi');
        let desc = $('<p>').text('Screen-oriented text editor originally created for the Unix operating system.')

        $('#container').append(title, desc);
    })
    $('#id').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('id');
        let desc = $('<p>').text('Prints real and effective user and group IDs.')

        $('#container').append(title, desc);
    })
    $('#pwd').on('click', function(event){
        event.preventDefault();

        clearFunction();
        let title = $('<h1>').text('pwd');
        let desc = $('<p>').text('Prints the working directory (one that you are currently in).')

        $('#container').append(title, desc);
    })
})




let clearFunction = function(){
    $('#container').empty();
  }