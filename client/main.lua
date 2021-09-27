local progress = {}

progress.open = false

Progress = function(message, time, color)
    if not progress.open then
        progress.open = true
        SendNUIMessage({
            action = 'open',
            data = {
                message = message,
                time = time or 4000,
                color = color
            }
        })
    end
end

RegisterNUICallback('finish', function()
    progress.open = false
end)