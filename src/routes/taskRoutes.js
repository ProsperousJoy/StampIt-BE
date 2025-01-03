const express = require('express')
const { createTask, updateTaskStatus, editTask, deleteTask, getUserTasks } = require('../controllers/taskController')
const { authMiddleware } = require('../middleware/authMiddleware')

const router = express.Router()

router.post('/tasks', authMiddleware, createTask)
router.put('/tasks/:taskId', authMiddleware, updateTaskStatus)
router.patch('/tasks/:taskId', authMiddleware, editTask)
router.delete('/tasks/:taskId', authMiddleware, deleteTask)
router.get('/tasks', authMiddleware, getUserTasks)

module.exports = router