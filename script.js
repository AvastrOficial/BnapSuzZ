  let mediaRecorder;
        let chunks = [];
        const canvas = document.getElementById('screenshotCanvas');
        const ctx = canvas.getContext('2d');
        const loading = document.getElementById('loading');
        const video = document.getElementById('screenshotVideo');
        const startButton = document.getElementById('startRecording');
        const stopButton = document.getElementById('stopRecording');
        const downloadLink = document.getElementById('downloadLink');
        
        async function startRecording() {
            try {
                const stream = await navigator.mediaDevices.getDisplayMedia({ video: { frameRate: 10 }, audio: true });
                mediaRecorder = new MediaRecorder(stream);
                
                mediaRecorder.ondataavailable = (event) => {
                    if (event.data.size > 0) {
                        chunks.push(event.data);
                    }
                };
                
                mediaRecorder.onstop = () => {
                    const blob = new Blob(chunks, { type: 'video/webm' });
                    const url = URL.createObjectURL(blob);
                    video.src = url;
                    video.style.display = 'block';
                    loading.style.display = 'none';
                    startButton.style.display = 'none';
                    stopButton.style.display = 'none';
                    downloadLink.href = url; // Establece el enlace de descarga
                    downloadLink.style.display = 'block'; // Muestra el enlace de descarga
                };
                
                mediaRecorder.start();
                loading.style.display = 'block';
                startButton.style.display = 'none';
                stopButton.style.display = 'block';
            } catch (error) {
                console.error("Error al capturar pantalla:", error);
            }
        }

        function stopRecording() {
            mediaRecorder.stop();
        }

        startButton.addEventListener('click', startRecording);
        stopButton.addEventListener('click', stopRecording);
