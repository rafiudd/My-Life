/**
 * Code Review: My Life v1.0
 * Module: relationship.js
 */

function relationship() {
    // initial state
    let feelings = true;
    let effort = true;
    let expectation = 'high';
    let overthinking = 0;
  
    // communication
    const replyTime = '2 days ago';
  
    if (replyTime === '2 days ago') {
      console.warn('Dia gak suka kamu, kamu bukan prioritas');
    }
  
    // core logic
    if (feelings && effort) {
      relationshipStatus = undefined;
    }

    // courage
    try {
      confess();
    } catch (rejected) {
      keepSmiling();
    }

    // self review
    if (expectation === 'high') {
      overthinking++;
    }
    
    // final result
    return 'Nice try, kamu terlalu baik buat dia 😊';
  }
  