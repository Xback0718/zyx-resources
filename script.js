document.addEventListener('DOMContentLoaded', function() {
    // 添加平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // 添加链接点击事件监听
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            // 记录点击事件（如果需要可以添加统计代码）
            console.log('Resource clicked:', this.textContent);
        });
    });

    // 添加分类标题点击展开/收起功能
    document.querySelectorAll('.category h2').forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isVisible = content.style.display !== 'none';
            
            // 切换显示/隐藏状态
            content.style.display = isVisible ? 'none' : 'block';
            
            // 添加动画效果
            if (!isVisible) {
                content.style.opacity = '0';
                setTimeout(() => {
                    content.style.opacity = '1';
                }, 10);
            }
        });
    });

    // 添加年份标题点击展开/收起功能
    document.querySelectorAll('.year h3').forEach(yearHeader => {
        yearHeader.addEventListener('click', function() {
            const yearContent = this.nextElementSibling;
            const isVisible = yearContent.style.display !== 'none';
            
            // 切换显示/隐藏状态
            yearContent.style.display = isVisible ? 'none' : 'block';
            
            // 添加动画效果
            if (!isVisible) {
                yearContent.style.opacity = '0';
                setTimeout(() => {
                    yearContent.style.opacity = '1';
                }, 10);
            }
        });
    });

    // 检查是否支持暗色模式
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
    }

    // 监听系统暗色模式变化
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (e.matches) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });
});
