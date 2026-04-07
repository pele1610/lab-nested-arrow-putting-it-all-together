module.exports = {
    ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};

function createLoginTracker(userInfo) {
    let attemptCount = 0;

    return (passwordAttempt) => {
        attemptCount++;


        if (attemptCount > 3) {
            return "Account locked due to too many failed login attempts";
        }


        if (passwordAttempt === userInfo.password) {
            return "Login successful";
        } else {
            return `Attempt ${attemptCount}: Login failed`;
        }
    };
}