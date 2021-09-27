local progress = {}

progress.open = false

local function Progress(message, time, color)
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

RegisterNetEvent('mdn_progressbar:progress', function(message, time, color)
    Progress(message, time, color)
end)
