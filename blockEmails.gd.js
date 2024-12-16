// appscript from google

function blockEmails() {
  const start = Date.now(); 
  const threads = GmailApp.getInboxThreads();
  for (let i = 0; i < threads.length; i++) {
    threads[i].getMessages().forEach((messages)=>{
      if(messages.getDate() -0< new Date() - 24*3600*1000) return;
      if (messages.getTo().includes("+noreply")) {
      Logger.log(messages.getTo());
        messages.moveToTrash()
      }
    }
    )
  }
  GmailApp.getSpamThreads().forEach((thread)=>{
    thread.moveToTrash();
  });
  Logger.info("Finished in " + (Date.now()-start) + " ms")

}
